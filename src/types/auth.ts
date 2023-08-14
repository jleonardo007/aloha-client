export type AuthLinksProps = {
  text: string;
  linkText: string;
  onClick: () => void;
};

export type AuthParentProps = {
  getCurrentUser: (userCredentials: UserCredentials, isSignUp: boolean) => void;
  getCurrentUserFromGoogle: (token: string, isSignUp: boolean) => void;
  widthForGoogleButton: number | undefined;
};

export type AuthFormProps = {
  signUpForm: boolean;
  children?: React.ReactNode;
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
