import { gql } from '@apollo/client';

export const USER_FRAGMENT = gql`
  fragment User on UserOutput {
    _id
    email
    fullName
    isCloseAccount
    lastTimeConnected
    profilePicture
    status
    contacts {
      _id
      name
      user {
        _id
        fullName
        profilePicture
        status
        lastTimeConnected
        isCloseAccount
      }
    }
    chats {
      _id
    }
    calls {
      _id
    }
  }
`;
