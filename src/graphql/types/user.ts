export interface UserData {
  _id: string;
  accessToken: string;
  contacts: [];
  email?: string;
  fullName: string;
  groups: [];
  isClosedAccount: boolean;
  lastTimeConnected: Date;
  profilePicture: string;
  status: string;
}
