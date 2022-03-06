import {cities} from 'fixture/cities';
import {hosts} from 'fixture/hosts';
import {Offers} from 'types/offer';

const nearbyOffers: Offers = [
  {
    bedrooms: 3,
    city: cities[0],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating',
      'Dishwasher',
      'Fridge',
    ],
    host: hosts[0],
    id: 10,
    images: [
      'http://picsum.photos/260/200?r=3',
      'http://picsum.photos/260/200?r=4',
      'http://picsum.photos/260/200?r=5',
      'http://picsum.photos/260/200?r=6',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3509553943508,
      longitude: 4.65309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'http://picsum.photos/260/200?r=1',
    price: 120,
    rating: 3.5,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
  },
  {
    bedrooms: 1,
    city: cities[0],
    description: 'Apartments in a beautiful city, with crowded streets, in a middle of Europe',
    goods: [
      'Cabel TV',
      'Towels',
      'Dishwasher',
    ],
    host: hosts[1],
    id: 11,
    images: [
      'http://picsum.photos/260/200?r=15',
      'http://picsum.photos/260/200?r=16',
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.2909553943508,
      longitude: 4.629309666406198,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'http://picsum.photos/260/200?r=5',
    price: 140,
    rating: 4.0,
    title: 'Modern studio',
    type: 'Private room',
  },
  {
    bedrooms: 2,
    city: cities[0],
    description: 'Flat in a beautiful old town.',
    goods: [
      'Heating',
    ],
    host: hosts[0],
    id: 12,
    images: [
      'http://picsum.photos/260/200?r=18',
      'http://picsum.photos/260/200?r=19',
      'http://picsum.photos/260/200?r=10',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.2509553943508,
      longitude: 4.78309666406198,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'http://picsum.photos/260/200?r=4',
    price: 420,
    rating: 4.3,
    title: 'Luxurious studio in a downtown',
    type: 'Apartment',
  },
];

export {nearbyOffers};
