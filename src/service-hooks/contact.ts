import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_CONTACT } from 'src/graphql/queries/contact';
import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from 'src/graphql/mutations/contact';

export function useGetContactService() {
  const [getContact, { data, loading, error }] = useLazyQuery(GET_CONTACT);

  return {
    getContact,
    data,
    loading,
    error,
  };
}

export function useCreateContactService() {
  const [createContact, { data, loading, error }] = useMutation(ADD_CONTACT);

  return {
    createContact,
    data,
    loading,
    error,
  };
}

export function useUpdateContactService() {
  const [updateContact, { data, loading, error }] = useMutation(UPDATE_CONTACT);

  return {
    updateContact,
    data,
    loading,
    error,
  };
}

export function useDeleteContactService() {
  const [deleteContact, { data, loading, error }] = useMutation(DELETE_CONTACT);

  return {
    deleteContact,
    data,
    loading,
    error,
  };
}
