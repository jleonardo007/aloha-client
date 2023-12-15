/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useLayoutEffect, useContext } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_NEW_ACCESS_TOKEN } from 'src/graphql/queries/auth';
import { REFRESH_ACCESS_TOKEN_INTERVAL } from 'src/constants/logic-constants';
import { CurrentUserContext } from 'src/context/current-user';
import { CurrentUserActions } from 'src/reducers/current-user';

/**
 * * This hook queries a new access token once user enters into the app
 * * and will query again 5 minutes before access token expires
 */
export function useGetAccessTokenService() {
  const { currentUser, dispatch } = useContext(CurrentUserContext);
  const { _id, accessToken } = currentUser;
  const [getNewAccessToken, { data }] = useLazyQuery(GET_NEW_ACCESS_TOKEN, {
    fetchPolicy: 'network-only',
  });

  useLayoutEffect(() => {
    //get accessToken once component mount
    if (accessToken) {
      return;
    }

    getNewAccessToken({
      variables: {
        getNewTokenInput: {
          _id,
        },
      },
    });
  }, [accessToken]);

  useLayoutEffect(() => {
    // get token with a defined interval
    if (!accessToken) {
      return;
    }

    const interval = setInterval(() => {
      getNewAccessToken({
        variables: {
          getNewTokenInput: {
            _id,
          },
        },
      });
    }, REFRESH_ACCESS_TOKEN_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [accessToken]);

  useEffect(() => {
    if (!data) {
      return;
    }

    dispatch({
      type: CurrentUserActions.GET_NEW_ACCESS_TOKEN,
      payload: data.getNewAccessToken,
    });
  }, [data]);
}
