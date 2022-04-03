import {
  datatype,
  internet,
  lorem
} from 'faker';
import {User} from 'types/user';

export const makeFakeUser = ():User => (
  {
    avatarUrl: internet.avatar(),
    email: internet.email(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: lorem.word(),
  }
);
