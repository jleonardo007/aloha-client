import { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Auth from 'src/components/auth';
import useCurrentUser from 'src/hooks/current-user';
import { GOOGLE_CLIENT_ID } from 'src/constants/auth';

function App() {
  const { CurrentUserContext, currentUser, getCurrentUser, getCurrentUserFromGoogle } =
    useCurrentUser();
  const [width, setWidth] = useState<number | undefined>(0);

  if (currentUser) {
    return (
      <CurrentUserContext.Provider value={currentUser}>
        <h1>UI</h1>
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
      />
    </GoogleOAuthProvider>
  );
}

export default App;
