import { UserData } from 'src/graphql/types/user';

export const enum CurrentUserActions {
  GET_USER_FROM_LOGIN = 'GET_USER_FROM_LOGIN',
  GET_USER_FROM_LOCAL_STORAGE = 'GET_USER_FROM_LOCAL_STORAGE',
  GET_NEW_ACCESS_TOKEN = 'GET_NEW_ACCESS_TOKEN',
}

export type CurrentUserActionsType =
  | {
      type: CurrentUserActions.GET_USER_FROM_LOGIN | CurrentUserActions.GET_USER_FROM_LOCAL_STORAGE;
      payload: UserData;
    }
  | {
      type: CurrentUserActions.GET_NEW_ACCESS_TOKEN;
      payload: string;
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

    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}
