import { useContext, useEffect } from 'react';
import { CurrentUserContext } from 'src/context/current-user';
import { UserCredentials } from 'src/types/auth';
import { UserData } from 'src/graphql/types/user';
import { saveUser } from 'src/utils/local-storage';
import { CurrentUserActions } from 'src/reducers/current-user';
import {
  useSignInWithEmail,
  useSignUpWithEmail,
  useSignInWithGoogle,
  useSignUpWithGoogle,
} from 'src/service-hooks/auth';

export function useLogin() {
  const { dispatch } = useContext(CurrentUserContext);
  const { signInWithEmail, signInData, isSignInLoading, signInError } = useSignInWithEmail();
  const { signUpWithEmail, signUpData, isSignUpLoading, signUpError } = useSignUpWithEmail();
  const { signInWithGoogle, googleSignInData, isGoogleSignInLoading, googleSignInError } =
    useSignInWithGoogle();
  const { signUpWithGoogle, googleSignUpData, isGoogleSignUpLoading, googleSignUpError } =
    useSignUpWithGoogle();

  const userData: UserData | null | undefined =
    signInData || signUpData || googleSignInData || googleSignUpData;
  const isLoading =
    isSignInLoading || isSignUpLoading || isGoogleSignInLoading || isGoogleSignUpLoading;
  const error = signInError || signUpError || googleSignInError || googleSignUpError;

  useEffect(() => {
    if (!userData) {
      return;
    }

    saveUser(userData);
    dispatch({
      type: CurrentUserActions.GET_USER_FROM_LOGIN,
      payload: userData,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  function getCurrentUser(userCredentials: UserCredentials, isSignUp: boolean) {
    if (isSignUp) {
      signUpWithEmail({
        variables: { signUpInput: { ...userCredentials } },
      });
    } else {
      signInWithEmail({
        variables: {
          signInInput: { email: userCredentials.email, password: userCredentials.password },
        },
      });
    }
  }

  function getCurrentUserFromGoogle(token: string, isSignUp: boolean) {
    if (isSignUp) {
      signUpWithGoogle({
        variables: {
          tokenInput: { tokenFromGoogle: token },
        },
      });
    } else {
      signInWithGoogle({
        variables: {
          tokenInput: { tokenFromGoogle: token },
        },
      });
    }
  }

  return {
    isLoading,
    error,
    getCurrentUser,
    getCurrentUserFromGoogle,
  };
}
