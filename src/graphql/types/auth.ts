export interface EmailAuthVariabes {
  [key: string]: { fullName?: string; email: string; password: string };
}

export interface GoogleAuthVariables {
  tokenInput: {
    tokenFromGoogle: string;
  };
}
