import {
  api,
  store
} from 'store/store';
import {ApiRoute} from 'settings/api';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {generatePath} from 'react-router-dom';
import {getOffers} from 'store/offers/api-action';
import {handleError} from 'services/handleError';
import {NameSpace} from 'settings/name-space';
import {Offers} from 'types/offer';
import {setFavoriteOffers} from 'store/favorite-offers/favorite-offers-reducer';

export const getFavoriteOffersData = createAsyncThunk(
  'favorite-offers/getFavoriteOffersData',
  async () => {
    try {
      const {data} = await api.get<Offers>(ApiRoute.FavoriteOffers);
      store.dispatch(setFavoriteOffers(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const toggleFavoriteOfferStatus = createAsyncThunk(
  'favorite-offers/setFavoriteOfferStatus',
  async (offerId: number) => {
    try {
      const offer = store.getState()[NameSpace.Offers].offers.find(
        (currentOffer) => currentOffer.id === offerId,
      );
      if (typeof offer === 'undefined') {
        return;
      }
      const status = offer.isFavorite ? 0 : 1;
      await api.post(
        generatePath(
          ApiRoute.SetFavoriteOfferStatus,
          {
            offerId: `${offerId}`,
            status: `${status}`,
          },
        ),
      );
      store.dispatch(getOffers());
      store.dispatch(getFavoriteOffersData());
    } catch (error) {
      handleError(error);
    }
  },
);
