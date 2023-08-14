type ButtonsShape = {
  [key: string]: {
    label: string;
    type: 'submit' | 'button';
  };
};

export enum GOOGLE_BUTTON {
  signInText = 'signin_with',
  signUpText = 'signup_with',
  logoAlignment = 'center',
  contextSignIn = 'signin',
  contextSignUp = 'signup',
}

export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export const AUTH_TEXTS = {
  mainText: 'stay connected',
  signInLink: {
    text: 'Have an account?',
    linkText: 'sign in',
  },
  signUpLink: {
    text: 'Dont have an account?',
    linkText: 'sign up',
  },
};

export const INPUTS = {
  fullName: {
    label: 'full name',
    type: 'text',
    inputName: 'fullName',
    placeholder: 'John Doe',
    required: true,
  },
  email: {
    label: 'email',
    type: 'email',
    inputName: 'email',
    placeholder: 'johndoe@gmail.com',
    required: true,
  },
  password: {
    label: 'password',
    type: 'password',
    inputName: 'password',
    placeholder: 'Type your password',
    required: true,
  },
};

export const BUTTONS: ButtonsShape = {
  signUp: {
    label: 'sign up',
    type: 'submit',
  },
  signIn: {
    label: 'sign in',
    type: 'submit',
  },
};
