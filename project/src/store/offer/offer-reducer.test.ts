import {NewReviewSendStatus} from 'settings/new-review-send-status';
import {offerReducer} from './offer-reducer';

describe('offerReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(offerReducer.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        offer: null,
        reviews: [],
        nearbyOffers: [],
        newReviewSendStatus: NewReviewSendStatus.NotSend,
      })
  })

});
