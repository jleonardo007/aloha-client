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

export const AUTH_VALIDATION = {
  fullNameMaxLength: 60,
  passwordMinLength: 8,
  validEmail:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const ERROR_MESSAGES = {
  email: 'invalid email address',
  password: 'too short password',
  fullName: 'too long name',
  required: 'this field is required',
};
