const cities = [
  {
    code: 'paris',
    name: 'Paris',
  },
  {
    code: 'cologne',
    name: 'Cologne',
  },
  {
    code: 'brussels',
    name: 'Brussels',
  },
  {
    code: 'amsterdam',
    name: 'Amsterdam',
  },
  {
    code: 'hamburg',
    name: 'Hamburg',
  },
  {
    code: 'dusseldorf',
    name: 'Dusseldorf',
  },
];


function CityTabs(): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => (
              <li className="locations__item" key={city.code}>
                <a className="locations__item-link tabs__item" href={`/${city.code}`}>
                  <span>{city.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export {CityTabs};
