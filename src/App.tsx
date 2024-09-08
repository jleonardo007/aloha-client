import { useState, useContext, useLayoutEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CurrentUserContext } from 'src/context/current-user';
import { AppScreensProvider } from 'src/context/app-screens';
import { CurrentUserActions } from 'src/reducers/current-user';
import { useLogin } from 'src/hooks/login';
import { Auth } from 'src/components/auth';
import { MobileLayout } from 'src/components/mobile-layout';
import { DesktopLayout } from 'src/components/desktop-layout';
import { GOOGLE_CLIENT_ID } from 'src/constants/auth';
import { readUser } from 'src/utils/local-storage';

function App() {
  const { currentUser, dispatch } = useContext(CurrentUserContext);
  const [width, setWidth] = useState<number | undefined>(0);
  const { error, isLoading, getCurrentUser, getCurrentUserFromGoogle } = useLogin();
  const savedUser = readUser();

  useLayoutEffect(() => {
    if (!savedUser) {
      return;
    }
    dispatch({
      type: CurrentUserActions.GET_USER_FROM_LOCAL_STORAGE,
      payload: savedUser,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (currentUser._id) {
    return (
      <AppScreensProvider>
        <MessagingPanel />
      </AppScreensProvider>
    );
  }

  return (
    <GoogleOAuthProvider
      clientId={GOOGLE_CLIENT_ID}
      onScriptLoadSuccess={() => {
        if (document.querySelector<HTMLDivElement>('.input')) {
          setWidth(document.querySelector<HTMLDivElement>('.input')?.offsetWidth);
        }
      }}
    >
      <Auth
        getCurrentUser={getCurrentUser}
        getCurrentUserFromGoogle={getCurrentUserFromGoogle}
        widthForGoogleButton={width}
        error={error}
        isLoading={isLoading}
      />
    </GoogleOAuthProvider>
  );
}

export default App;
