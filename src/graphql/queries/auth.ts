import { gql, TypedDocumentNode } from '@apollo/client';
import {
  EmailAuthVariabes,
  GoogleAuthVariables,
  GetNewCredentialsVariable,
} from 'src/graphql/types/auth';
import { UserFromAuthServices, AuthResolvers } from 'src/graphql/types/auth';
import { USER_FRAGMENT } from 'src/graphql/fragments';

export const SIGN_IN_WITH_EMAIL: TypedDocumentNode<
  UserFromAuthServices<AuthResolvers.signInWithEmail>,
  EmailAuthVariabes
> = gql`
  ${USER_FRAGMENT}
  query signInWithEmail($input: GetUserInput!) {
    signInWithEmail(input: $input) {
      ...User
    }
  }
`;

export const SIGN_IN_WITH_GOOGLE: TypedDocumentNode<
  UserFromAuthServices<AuthResolvers.signInWithGoogle>,
  GoogleAuthVariables
> = gql`
  ${USER_FRAGMENT}
  query signInWithGoogle($input: TokenInput!) {
    signInWithGoogle(input: $input) {
      ...User
    }
  }
`;

export const VERIFY_CRENDENTIALS_COOKIE: TypedDocumentNode<{ verifyExpiredCredentials: string }> =
  gql`
    query verifyExpiredCredentials {
      verifyExpiredCredentials
    }
  `;

export const GET_NEW_CREDENTIALS_COOKIE: TypedDocumentNode<
  { getNewCredential: string },
  GetNewCredentialsVariable
> = gql`
  query getNewCredential($input: CredentialInput!) {
    getNewCredential(input: $input)
  }
`;
