import { gql, TypedDocumentNode } from '@apollo/client';
import { ContactResolvers, DataFromContactService, ContactVariable } from '../types/contact';

export const GET_CONTACT: TypedDocumentNode<
  DataFromContactService<ContactResolvers.getContact>,
  ContactVariable
> = gql`
  query getContact($input: GetContactInput!) {
    getContact(input: $input) {
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
