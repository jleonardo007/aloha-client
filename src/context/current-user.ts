import { createContext } from 'react';
import { UserData } from 'src/graphql/types/user';

const user: UserData = {
  _id: '',
  accessToken: '',
  email: '',
  fullName: '',
  isClosedAccount: false,
  lastTimeConnected: new Date(),
  profilePicture: '',
  status: 'Available',
  contacts: [],
  groups: [],
  chats: [],
  calls: [],
};

export const CurrentUserContext = createContext(user);
