import { gql, TypedDocumentNode } from '@apollo/client';
import {
  EmailAuthVariabes,
  GoogleAuthVariables,
  GetNewTokenVariables,
} from 'src/graphql/types/auth';
import { UserFromAuthServices, AuthResolvers } from 'src/graphql/types/auth';
import { USER_FRAGMENT } from 'src/graphql/fragments';

export const SIGN_UP_WITH_EMAIL: TypedDocumentNode<
  UserFromAuthServices<AuthResolvers.signUpWithEmail>,
  EmailAuthVariabes
> = gql`
  ${USER_FRAGMENT}
  mutation signUpWithEmail($input: CreateUserInput!) {
    signUpWithEmail(input: $input) {
      ...User
    }
  }
`;

export const SIGN_UP_WITH_GOOGLE: TypedDocumentNode<
  UserFromAuthServices<AuthResolvers.signUpWithGoogle>,
  GoogleAuthVariables
> = gql`
  ${USER_FRAGMENT}
  mutation signUpWithEmail($input: TokenInput!) {
    signUpWithGoogle(input: $input) {
      ...User
    }
  }
`;

export const GET_NEW_REFRESH_TOKEN: TypedDocumentNode<string, GetNewTokenVariables> = gql`
  mutation getNewRefreshToken($getNewTokenInput: GetNewTokenInput!) {
    getNewRefreshToken(getNewTokenInput: $getNewTokenInput)
  }
`;
