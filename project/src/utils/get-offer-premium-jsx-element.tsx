export const getOfferPremiumJsxElement = (offerIsPremium: boolean) => {
  if (!offerIsPremium) {
    return null;
  }

  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
};