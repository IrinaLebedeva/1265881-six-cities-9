import {cities} from 'fixture/cities';
import {hosts} from 'fixture/hosts';
import {Offers} from 'types/offer';

const offers: Offers = [
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
    id: 1,
    images: [
      'http://picsum.photos/260/200?r=3',
      'http://picsum.photos/260/200?r=4',
      'http://picsum.photos/260/200?r=5',
      'http://picsum.photos/260/200?r=6',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
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
    bedrooms: 2,
    city: cities[0],
    description: 'A  a true asian pearl, middle-eastern paradise, full of of cozy canteens where you can try the best coffee in the Middle East, famous for its crowded street markets with the best street food in Amsterdam.',
    goods: [
      'Heating',
      'Cabel TV',
      'Towels',
      'Dishwasher',
      'Fridge',
    ],
    host: hosts[1],
    id: 2,
    images: [
      'http://picsum.photos/260/200?r=8',
      'http://picsum.photos/260/200?r=9',
      'http://picsum.photos/260/200?r=10',
      'http://picsum.photos/260/200?r=11',
      'http://picsum.photos/260/200?r=12',
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.55514938496378,
      longitude: 4.573877537499948,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'http://picsum.photos/260/200?r=14',
    price: 320,
    rating: 5.0,
    title: 'Luxurious studio',
    type: 'Private room',
  },
  {
    bedrooms: 1,
    city: cities[0],
    description: 'Apartments in a beautiful city, with crowded streets, in a middle of Europe, with an embankment of a mighty river as a centre of attraction',
    goods: [
      'Cabel TV',
      'Towels',
      'Dishwasher',
    ],
    host: hosts[1],
    id: 3,
    images: [
      'http://picsum.photos/260/200?r=15',
      'http://picsum.photos/260/200?r=16',
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.55514938496378,
      longitude: 4.573877537499948,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'http://picsum.photos/260/200?r=17',
    price: 140,
    rating: 4.0,
    title: 'Modern studio',
    type: 'Private room',
  },
  {
    bedrooms: 2,
    city: cities[0],
    description: 'Flat in a beautiful old town, middle-eastern paradise.',
    goods: [
      'Heating',
    ],
    host: hosts[0],
    id: 4,
    images: [
      'http://picsum.photos/260/200?r=18',
      'http://picsum.photos/260/200?r=19',
      'http://picsum.photos/260/200?r=10',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 51.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'http://picsum.photos/260/200?r=1',
    price: 420,
    rating: 4.3,
    title: 'Luxurious studio in a downtown',
    type: 'Apartment',
  },
];

export {offers};
