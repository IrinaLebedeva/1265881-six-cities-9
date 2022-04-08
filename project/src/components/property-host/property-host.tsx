import clsx from 'clsx';
import {Offer} from 'types/offer';

type PropertyHostProps = {
  offer: Offer;
}

function PropertyHost({offer}: PropertyHostProps): JSX.Element {
  return (
    <div className="property__host" data-testid="property-host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={clsx('property__avatar-wrapper', {'property__avatar-wrapper--pro': offer.host.isPro}, 'user__avatar-wrapper')}>
          <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {offer.host.name}
        </span>
        {(!offer.host.isPro) ? '' : (
          <span className="property__user-status">
            Pro
          </span>
        )}
      </div>
      <div className="property__description">
        <p className="property__text">{offer.description}</p>
      </div>
    </div>
  );
}

export {PropertyHost};
