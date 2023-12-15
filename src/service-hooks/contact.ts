import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_CONTACT } from 'src/graphql/queries/contact';
import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from 'src/graphql/mutations/contact';

export function useGetContactService(accessToken: string) {
  const [getContact, { data, loading, error }] = useLazyQuery(GET_CONTACT, {
    context: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });

  return {
    getContact,
    data,
    loading,
    error,
  };
}

export function useCreateContactService(accessToken: string) {
  const [createContact, { data, loading, error }] = useMutation(ADD_CONTACT, {
    context: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });

  return {
    createContact,
    data,
    loading,
    error,
  };
}

export function useUpdateContactService(accessToken: string) {
  const [updateContact, { data, loading, error }] = useMutation(UPDATE_CONTACT, {
    context: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });

  return {
    updateContact,
    data,
    loading,
    error,
  };
}

export function useDeleteContactService(accessToken: string) {
  const [deleteContact, { data, loading, error }] = useMutation(DELETE_CONTACT, {
    context: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });

  return {
    deleteContact,
    data,
    loading,
    error,
  };
}
