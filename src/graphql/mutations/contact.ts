import { gql, TypedDocumentNode } from '@apollo/client';
import {
  ContactResolvers,
  DataFromContactService,
  CreateContactVariables,
  ContactVariable,
  ContactInputs,
} from '../types/contact';

export const ADD_CONTACT: TypedDocumentNode<
  DataFromContactService<ContactResolvers.createContact>,
  CreateContactVariables
> = gql`
  mutation createContact($createContactInput: CreateContactInput!) {
    createContact(createContactInput: $createContactInput) {
      _id
      name
      createdBy
      user {
        _id
        fullName
        profilePicture
        status
        lastTimeConnected
        isCloseAccount
      }
    }
  }
`;

export const UPDATE_CONTACT: TypedDocumentNode<
  { message: string },
  ContactVariable<ContactInputs.updateContact>
> = gql`
  mutation updateContact($updateContactInput: UpdateContactInput!) {
    updateContact(updateContactInput: $updateContactInput) {
      message
    }
  }
`;

export const DELETE_CONTACT: TypedDocumentNode<
  { message: string },
  ContactVariable<ContactInputs.deleteContact>
> = gql`
  mutation deleteContact($createContactInput: CreateContactInput!) {
    deleteContact(createContactInput: $creatContactInput) {
      message
    }
  }
`;
