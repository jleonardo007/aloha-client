import { gql } from '@apollo/client';

export const USER_FRAGMENT = gql`
  fragment User on UserOutput {
    _id
    accessToken
    contacts {
      name
    }
    email
    fullName
    groups {
      name
    }
    isCloseAccount
    lastTimeConnected
    profilePicture
    status
  }
`;
