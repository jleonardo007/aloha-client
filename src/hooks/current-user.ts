import { createContext } from 'react';
import {
  useSignInWithEmail,
  useSignUpWithEmail,
  useSignInWithGoogle,
  useSignUpWithGoogle,
} from 'src/service-hooks/auth';
import { UserCredentials } from 'src/types/auth';
import { UserData } from 'src/graphql/types/user';

const user: UserData = {
  _id: '',
  accessToken: '',
  contacts: [],
  email: '',
  fullName: '',
  groups: [],
  isClosedAccount: false,
  lastTimeConnected: new Date(),
  profilePicture: '',
  status: 'Available',
};
const CurrentUserContext = createContext<UserData>(user);

export default function useCurrentUser() {
  const { signInWithEmail, signInData, isSignInLoading, signInError } = useSignInWithEmail();
  const { signUpWithEmail, signUpData, isSignUpLoading, signUpError } = useSignUpWithEmail();
  const { signInWithGoogle, googleSignInData, isGoogleSignInLoading, googleSignInError } =
    useSignInWithGoogle();
  const { signUpWithGoogle, googleSignUpData, isGoogleSignUpLoading, googleSignUpError } =
    useSignUpWithGoogle();

  const currentUser: UserData | null | undefined =
    signInData || signUpData || googleSignInData || googleSignUpData;
  const isLoading =
    isSignInLoading || isSignUpLoading || isGoogleSignInLoading || isGoogleSignUpLoading;
  const error = signInError || signUpError || googleSignInError || googleSignUpError;

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
    CurrentUserContext,
    currentUser,
    isLoading,
    error,
    getCurrentUser,
    getCurrentUserFromGoogle,
  };
}
