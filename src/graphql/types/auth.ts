export interface EmailAuthVariabes {
  [key: string]: { fullName?: string; email: string; password: string };
}

export interface GoogleAuthVariables {
  tokenInput: {
    tokenFromGoogle: string;
  };
}

export interface GetNewTokenVariables {
  getNewTokenInput: {
    _id: string;
  };
}
