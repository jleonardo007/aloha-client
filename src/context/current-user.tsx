import { Dispatch, ReactNode, createContext, useReducer } from 'react';
import { currentUserReducer, CurrentUserActionsType } from 'src/reducers/current-user';
import { UserData } from 'src/graphql/types/user';

type ContextProps = {
  currentUser: UserData;
  dispatch: Dispatch<CurrentUserActionsType>;
};

const initialUser: UserData = {
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

export const CurrentUserContext = createContext<ContextProps>({
  currentUser: initialUser,
  dispatch: () => {},
});

export function CurrentUserProvider({ children }: { children: ReactNode }) {
  const [currentUser, dispatch] = useReducer(currentUserReducer, initialUser);
  const value = { currentUser, dispatch };

  return <CurrentUserContext.Provider value={value}>{children}</CurrentUserContext.Provider>;
}
