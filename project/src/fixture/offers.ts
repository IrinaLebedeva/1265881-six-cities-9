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
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
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
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
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
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
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
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'http://picsum.photos/260/200?r=1',
    price: 420,
    rating: 4.3,
    title: 'Luxurious studio in a downtown',
    type: 'Apartment',
  },
  {
    bedrooms: 4,
    city: cities[1],
    description: 'Close to the Paris Diderot University and a 10-minute walk from the RER C station and metro line 14. All apartments with city views, balconies that are approx',
    goods: [
      'Heating',
      'TV',
    ],
    host: hosts[1],
    id: 5,
    images: [
      'http://picsum.photos/260/200?r=19',
      'http://picsum.photos/260/200?r=10',
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 48.664716,
      longitude: 2.349014,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'http://picsum.photos/260/200?r=5',
    price: 120,
    rating: 4.9,
    title: 'Pretty flat close to the Paris Diderot University',
    type: 'Apartment',
  },
  {
    bedrooms: 3,
    city: cities[1],
    description: 'This elegant 3-bedroom apartment is located on the first floor in the 7th arrondissement of Paris. Area - 147 m ^ 2. The apartment has been restored, the beauty has been preserved here.',
    goods: [
      'Cabel TV',
      'Towels',
      'Dishwasher',
    ],
    host: hosts[0],
    id: 6,
    images: [
      'http://picsum.photos/260/200?r=15',
      'http://picsum.photos/260/200?r=16',
      'http://picsum.photos/260/200?r=17',
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 48.764716,
      longitude: 2.399014,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: 'http://picsum.photos/260/200?r=17',
    price: 140,
    rating: 4.0,
    title: 'Apartment in Paris',
    type: 'Apartment',
  },
];

export {offers};
