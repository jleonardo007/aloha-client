import { useLazyQuery, useMutation } from '@apollo/client';
import { SIGN_IN_WITH_EMAIL, SIGN_IN_WITH_GOOGLE } from 'src/graphql/queries/auth';
import { SIGN_UP_WITH_EMAIL, SIGN_UP_WITH_GOOGLE } from 'src/graphql/mutations/auth';

export function useSignUpWithEmail() {
  const [signUpWithEmail, { data, loading, error }] = useMutation(SIGN_UP_WITH_EMAIL);

  return {
    signUpWithEmail,
    signUpData: data,
    signUpError: error,
    isSignUpLoading: loading,
  };
}

export function useSignInWithEmail() {
  const [signInWithEmail, { data, loading, error }] = useLazyQuery(SIGN_IN_WITH_EMAIL);

  return {
    signInWithEmail,
    signInData: data,
    signInError: error,
    isSignInLoading: loading,
  };
}

export function useSignUpWithGoogle() {
  const [signUpWithGoogle, { data, loading, error }] = useMutation(SIGN_UP_WITH_GOOGLE);

  return {
    signUpWithGoogle,
    googleSignUpData: data,
    googleSignUpError: error,
    isGoogleSignUpLoading: loading,
  };
}

export function useSignInWithGoogle() {
  const [signInWithGoogle, { data, loading, error }] = useLazyQuery(SIGN_IN_WITH_GOOGLE);

  return {
    signInWithGoogle,
    googleSignInData: data,
    googleSignInError: error,
    isGoogleSignInLoading: loading,
  };
}
