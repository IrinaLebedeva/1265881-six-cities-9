import {NearPlaceCard} from '../near-place-card/near-place-card';
import {getStringHashCode} from '../../utils/get-string-hash-code';

const MOCK_NEAR_PLACE_CARD_COUNT = 3;

function PropertyNearPlaces(): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {Array.from(Array(MOCK_NEAR_PLACE_CARD_COUNT)).map((_, index) => <NearPlaceCard id={index + 1} key={getStringHashCode(`${index}NearPlaceCard`)}/>)}
      </div>
    </section>
  );
}

export {PropertyNearPlaces};
