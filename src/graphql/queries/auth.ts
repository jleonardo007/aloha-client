import { gql, TypedDocumentNode } from '@apollo/client';
import {
  EmailAuthVariabes,
  GoogleAuthVariables,
  GetNewTokenVariables,
} from 'src/graphql/types/auth';
import { UserFromAuthServices, AuthResolvers } from 'src/graphql/types/auth';
import { USER_FRAGMENT } from 'src/graphql/fragments';

export const SIGN_IN_WITH_EMAIL: TypedDocumentNode<
  UserFromAuthServices<AuthResolvers.signInWithEmail>,
  EmailAuthVariabes
> = gql`
  ${USER_FRAGMENT}
  query signInWithEmail($signInInput: GetUserInput!) {
    signInWithEmail(signInInput: $signInInput) {
      ...User
    }
  }
`;

export const SIGN_IN_WITH_GOOGLE: TypedDocumentNode<
  UserFromAuthServices<AuthResolvers.signInWithGoogle>,
  GoogleAuthVariables
> = gql`
  ${USER_FRAGMENT}
  query signInWithGoogle($tokenInput: TokenInput!) {
    signInWithGoogle(tokenInput: $tokenInput) {
      ...User
    }
  }
`;

export const GET_NEW_ACCESS_TOKEN: TypedDocumentNode<
  { getNewAccessToken: string },
  GetNewTokenVariables
> = gql`
  query getNewAccessToken($getNewTokenInput: GetNewTokenInput!) {
    getNewAccessToken(getNewTokenInput: $getNewTokenInput)
  }
`;
