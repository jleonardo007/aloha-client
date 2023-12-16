import { UserData } from '../types/user';

export type ContactInfoFromUser = Omit<
  UserData,
  'accessToken' | 'contacts' | 'groups' | 'chats' | 'calls'
>;

export type Contact = {
  _id: string;
  createdBy: string;
  email: string;
  name: string;
  user: ContactInfoFromUser | null;
};

export type CreateContactVariables = {
  createContactInput: {
    name: string;
    email: string;
    createdBy: string;
  };
};

export enum ContactInputs {
  getContact = 'getContactInput',
  updateContact = 'updateContactInput',
  deleteContact = 'deleteContactInput',
}

export type ContactVariable<Type extends string> = {
  [key in Type]: {
    id: string;
    name?: string;
  };
};

export enum ContactResolvers {
  createContact = 'createContact',
  getContact = 'getContact',
  updateContact = 'updateContact',
  deleteContact = 'deleteContact',
}

export type DataFromContactService<Type extends string> = {
  [key in Type]: Contact;
};
