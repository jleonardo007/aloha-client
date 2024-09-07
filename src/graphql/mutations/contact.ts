import { gql, TypedDocumentNode } from '@apollo/client';
import {
  ContactResolvers,
  DataFromContactService,
  CreateContactVariables,
  ContactVariable,
} from '../types/contact';

export const ADD_CONTACT: TypedDocumentNode<
  DataFromContactService<ContactResolvers.createContact>,
  CreateContactVariables
> = gql`
  mutation createContact($input: CreateContactInput!) {
    createContact(input: $input) {
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

export const UPDATE_CONTACT: TypedDocumentNode<{ message: string }, ContactVariable> = gql`
  mutation updateContact($input: UpdateContactInput!) {
    updateContact(input: $input) {
      message
    }
  }
`;

export const DELETE_CONTACT: TypedDocumentNode<{ message: string }, ContactVariable> = gql`
  mutation deleteContact($input: CreateContactInput!) {
    deleteContact(input: $input) {
      message
    }
  }
`;
