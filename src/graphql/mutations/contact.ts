import { gql, TypedDocumentNode } from '@apollo/client';
import {
  ContactResolversData,
  DataFromContactService,
  CreateContactVariables,
  ContactVariable,
  ContactInputs,
} from '../types/contact';

export const ADD_CONTACT: TypedDocumentNode<
  DataFromContactService<ContactResolversData.createContact>,
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
  DataFromContactService<ContactResolversData.updateContact>,
  ContactVariable<ContactInputs.updateContact>
> = gql`
  mutation updateContact($updateContactInput: UpdateContactInput!) {
    updateContact(updateContactInput: $updateContactInput) {
      message
    }
  }
`;

export const DELETE_CONTACT: TypedDocumentNode<
  DataFromContactService<ContactResolversData.deleteContact>,
  ContactVariable<ContactInputs.deleteContact>
> = gql`
  mutation deleteContact($createContactInput: CreateContactInput!) {
    deleteContact(createContactInput: $creatContactInput) {
      message
    }
  }
`;
