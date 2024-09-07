import { UserData } from './user';

export interface EmailAuthVariabes {
  input: { fullName?: string; email: string; password: string };
}

export interface GoogleAuthVariables {
  input: {
    tokenFromGoogle: string;
  };
}

export interface GetNewTokenVariables {
  getNewTokenInput: {
    _id: string;
  };
}

export enum AuthResolvers {
  signInWithEmail = 'signInWithEmail',
  signInWithGoogle = 'signInWithGoogle',
  signUpWithEmail = 'signUpWithEmail',
  signUpWithGoogle = 'signUpWithGoogle',
}

export type UserFromAuthServices<Type extends string> = {
  [key in Type]: UserData;
};
