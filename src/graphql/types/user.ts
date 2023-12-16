import { Contact } from './contact';

export type UserData = {
  _id: string;
  accessToken: string;
  email?: string;
  fullName: string;
  isClosedAccount: boolean;
  lastTimeConnected: Date;
  profilePicture: string;
  status: string;
  contacts: Contact[];
  groups: [];
  chats: [];
  calls: [];
};
