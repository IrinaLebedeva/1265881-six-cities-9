import {datatype} from 'faker';
import {Location} from 'types/location';

export const makeFakeLocation = ():Location => (
  {
    latitude: datatype.number(),
    longitude: datatype.number(),
    zoom: datatype.number(),
  }
);
