import { gql } from '@apollo/client';

export const USER_FRAGMENT = gql`
  fragment User on UserOutput {
    _id
    accessToken
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
    groups {
      name
    }
    chats {
      _id
    }
    calls {
      _id
    }
  }
`;
