import { createContext } from 'react';
import { UserData } from 'src/graphql/types/user';

const user: UserData = {
  _id: '',
  accessToken: '',
  contacts: [],
  email: '',
  fullName: '',
  groups: [],
  isClosedAccount: false,
  lastTimeConnected: new Date(),
  profilePicture: '',
  status: 'Available',
};

export const CurrentUserContext = createContext(user);
