import { gql, TypedDocumentNode } from '@apollo/client';
import { EmailAuthVariabes, GoogleAuthVariables } from 'src/graphql/types/auth';
import { UserData } from 'src/graphql/types/user';
import { USER_FRAGMENT } from 'src/graphql/fragments';

export const SIGN_UP_WITH_EMAIL: TypedDocumentNode<UserData, EmailAuthVariabes> = gql`
  ${USER_FRAGMENT}
  mutation signUpWithEmail($signUpInput: CreateUserInput!) {
    signUpWithEmail(signUpInput: $signUpInput) {
      ...User
    }
  }
`;

export const SIGN_UP_WITH_GOOGLE: TypedDocumentNode<UserData, GoogleAuthVariables> = gql`
  ${USER_FRAGMENT}
  mutation signUpWithEmail($tokenInput: TokenInput!) {
    signUpWithGoogle(tokenInput: $tokenInput) {
      ...User
    }
  }
`;

export const GET_NEW_REFRESH_TOKEN = gql`
  mutation getNewRefreshToken($userdId: String!) {
    getNewRefreshToken(userId: $userId)
  }
`;
