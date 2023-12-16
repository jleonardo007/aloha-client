import { UserData } from 'src/graphql/types/user';
import { Contact } from 'src/graphql/types/contact';

export const enum CurrentUserActions {
  GET_USER_FROM_LOGIN = 'GET_USER_FROM_LOGIN',
  GET_USER_FROM_LOCAL_STORAGE = 'GET_USER_FROM_LOCAL_STORAGE',
  GET_NEW_ACCESS_TOKEN = 'GET_NEW_ACCESS_TOKEN',
  ADD_NEW_CONTACT = 'ADD_NEW_CONTACT',
}

export type CurrentUserActionsType =
  | {
      type: CurrentUserActions.GET_USER_FROM_LOGIN | CurrentUserActions.GET_USER_FROM_LOCAL_STORAGE;
      payload: UserData;
    }
  | {
      type: CurrentUserActions.GET_NEW_ACCESS_TOKEN;
      payload: string;
    }
  | {
      type: CurrentUserActions.ADD_NEW_CONTACT;
      payload: Contact;
    };

export function currentUserReducer(state: UserData, action: CurrentUserActionsType): UserData {
  switch (action.type) {
    case CurrentUserActions.GET_USER_FROM_LOGIN:
      return {
        ...action.payload,
      };

    case CurrentUserActions.GET_USER_FROM_LOCAL_STORAGE:
      return {
        ...action.payload,
      };

    case CurrentUserActions.GET_NEW_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };

    case CurrentUserActions.ADD_NEW_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}
