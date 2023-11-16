import { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Auth from 'src/components/auth';
import MessagingPanel from 'src/components/messaging-panel';
import useCurrentUser from 'src/hooks/current-user';
import useAppTransitions from 'src/hooks/app-transtions';
import { GOOGLE_CLIENT_ID } from 'src/constants/auth';

function App() {
  const {
    CurrentUserContext,
    currentUser,
    error,
    isLoading,
    getCurrentUser,
    getCurrentUserFromGoogle,
  } = useCurrentUser();
  const { currentTransition, prevTransition, changeTransition, TransitionContext } =
    useAppTransitions();
  const [width, setWidth] = useState<number | undefined>(0);

  if (currentUser?._id) {
    return (
      <CurrentUserContext.Provider value={currentUser}>
        <TransitionContext.Provider value={{ currentTransition, prevTransition, changeTransition }}>
          <MessagingPanel />
        </TransitionContext.Provider>
      </CurrentUserContext.Provider>
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
