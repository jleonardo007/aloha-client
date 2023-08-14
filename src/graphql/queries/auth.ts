import { gql, TypedDocumentNode } from '@apollo/client';
import { USER_FRAGMENT } from 'src/graphql/fragments';
import { EmailAuthVariabes, GoogleAuthVariables } from 'src/graphql/types/auth';
import { UserData } from 'src/graphql/types/user';

export const SIGN_IN_WITH_EMAIL: TypedDocumentNode<UserData, EmailAuthVariabes> = gql`
  ${USER_FRAGMENT}
  query signInWithEmail($signInInput: GetUserInput!) {
    signInWithEmail(signInInput: $signInInput) {
      ...User
    }
  }
`;

export const SIGN_IN_WITH_GOOGLE: TypedDocumentNode<UserData, GoogleAuthVariables> = gql`
  ${USER_FRAGMENT}
  query signInWithGoogle($tokenInput: TokenInput!) {
    signInWithGoogle(tokenInput: $tokenInput) {
      ...User
    }
  }
`;

export const GET_NEW_ACCESS_TOKEN = gql`
  query getNewAccessToken($userId: String!) {
    getNewAccessToken(userId: $userId)
  }
`;
