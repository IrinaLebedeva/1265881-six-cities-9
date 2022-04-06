import {
  makeFakeNearbyOffers,
  makeFakeOffer
} from 'utils/mocks/make-fake-offer';
import {makeFakeReviews} from 'utils/mocks/make-fake-review';
import {NewReviewSendStatus} from 'settings/new-review-send-status';
import {
  offerReducer,
  OfferReducerInitialState,
  setOffer,
  setOfferReviews,
  setOfferNearbyOffers,
  setNewReviewSendStatus
} from './offer-reducer';

const fakeOfferInitialState: OfferReducerInitialState = {
  offer: null,
  reviews: [],
  nearbyOffers: [],
  newReviewSendStatus: NewReviewSendStatus.NotSend,
};

const fakeOffer = makeFakeOffer();
const fakeReviews = makeFakeReviews();
const fakeNearbyOffers = makeFakeNearbyOffers();

describe('offerReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(offerReducer.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(fakeOfferInitialState);
  });

  it('should set offer', () => {
    expect(offerReducer.reducer(fakeOfferInitialState, setOffer(fakeOffer)))
      .toEqual({
        offer: fakeOffer,
        reviews: [],
        nearbyOffers: [],
        newReviewSendStatus: NewReviewSendStatus.NotSend,
      });
  });

  it('should set offer reviews', () => {
    expect(offerReducer.reducer(fakeOfferInitialState, setOfferReviews(fakeReviews)))
      .toEqual({
        offer: null,
        reviews: fakeReviews,
        nearbyOffers: [],
        newReviewSendStatus: NewReviewSendStatus.NotSend,
      });
  });

  it('should set offer\'s nearby offers', () => {
    expect(offerReducer.reducer(fakeOfferInitialState, setOfferNearbyOffers(fakeNearbyOffers)))
      .toEqual({
        offer: null,
        reviews: [],
        nearbyOffers: fakeNearbyOffers,
        newReviewSendStatus: NewReviewSendStatus.NotSend,
      });
  });

  it(`should set new review send status ${NewReviewSendStatus.Success}`, () => {
    expect(offerReducer.reducer(
      fakeOfferInitialState,
      setNewReviewSendStatus(NewReviewSendStatus.Success),
    ))
      .toEqual({
        offer: null,
        reviews: [],
        nearbyOffers: [],
        newReviewSendStatus: NewReviewSendStatus.Success,
      });
  });

});
