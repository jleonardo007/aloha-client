import { ApolloError } from '@apollo/client';

export type AuthLinksProps = {
  text: string;
  linkText: string;
  onClick: () => void;
};

export type AuthParentProps = {
  getCurrentUser: (userCredentials: UserCredentials, isSignUp: boolean) => void;
  getCurrentUserFromGoogle: (token: string, isSignUp: boolean) => void;
  widthForGoogleButton: number | undefined;
  error?: ApolloError;
  isLoading: boolean;
};

export type AuthFormProps = {
  signUpForm: boolean;
  children?: React.ReactNode;
  error?: ApolloError;
  isLoading: boolean;
  toggleForm: () => void;
  getCurrentUser: (userCredentials: UserCredentials, isSignUp: boolean) => void;
};

export type UserCredentials = {
  fullName?: string;
  email: string;
  password: string;
};

export interface Credentials extends UserCredentials {
  [key: string]: FormDataEntryValue | undefined;
}
