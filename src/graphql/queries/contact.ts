import { gql, TypedDocumentNode } from '@apollo/client';
import {
  ContactInputs,
  ContactResolversData,
  DataFromContactService,
  ContactVariable,
} from '../types/contact';

export const GET_CONTACT: TypedDocumentNode<
  DataFromContactService<ContactResolversData.getContact>,
  ContactVariable<ContactInputs.getContact>
> = gql`
  query getContact($getContactInput: GetContactInput!) {
    getContact(getContactInput: $getContactInput) {
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
