/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, useEffect, useContext } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_NEW_CREDENTIALS_COOKIE, VERIFY_CRENDENTIALS_COOKIE } from 'src/graphql/queries/auth';
import { CurrentUserContext } from 'src/context/current-user';

/**
 * * This hook verifies if the credentials cookie was deleted from browser
 * due expiration or unexpected erease while user is logged, if the cookie
 * was ereased this hook runs a query to get a new credential cookie.
 *
 * * If there is an error when trying to get a new cookie this hook forces the logout,
 * same when current user data is empty
 */
export function useGetNewCredentialsService() {
  const { currentUser } = useContext(CurrentUserContext);
  const [getNewCrendential, { error }] = useLazyQuery(GET_NEW_CREDENTIALS_COOKIE, {
    fetchPolicy: 'network-only',
  });
  const [verifyCredentials, { data }] = useLazyQuery(VERIFY_CRENDENTIALS_COOKIE, {
    fetchPolicy: 'network-only',
  });

  useLayoutEffect(() => {
    if (!currentUser) {
      // TODO: run logout
      return;
    }
    verifyCredentials();
  }, []);

  useLayoutEffect(() => {
    if (data?.verifyExpiredCredentials === 'CREDENTIALS_EXPIRED') {
      getNewCrendential({
        variables: {
          input: { userId: currentUser._id },
        },
      });
    }
  }, [data]);

  useEffect(() => {
    console.log(error);
    // TODO: run logout
  }, [error]);
}
