import { useState, useContext, useLayoutEffect, FormEvent } from 'react';
import { CreateContactProps } from 'src/types/contacts-panel';
import { CREATE_CONTACT } from 'src/constants/ui-constants';
import { AUTH_VALIDATION, ERROR_MESSAGES } from 'src/constants/auth';
import { useCreateContactService } from 'src/service-hooks/contact';
import { CurrentUserContext } from 'src/context/current-user';
import { CurrentUserActions } from 'src/reducers/current-user';
import { Header } from 'src/components/ui/header';
import { BackButton } from 'src/components/ui/back-button';
import { Input } from 'src/components/ui/input';
import { Button } from 'src/components/ui/button';

type CreateContactInput = {
  [key: string]: FormDataEntryValue;
  name: string;
  email: string;
};

export function CreateContact({ goToScreen }: CreateContactProps) {
  const [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
  });
  const { currentUser, dispatch } = useContext(CurrentUserContext);
  const { _id } = currentUser;
  const { createContact, data, loading, error } = useCreateContactService();

  useLayoutEffect(() => {
    if (!data) {
      return;
    }

    dispatch({
      type: CurrentUserActions.ADD_NEW_CONTACT,
      payload: data.createContact,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  function validateInput({ name, email }: { name: string; email: string }) {
    let result = {
      name: '',
      email: '',
      isValid: false,
    };

    if (name) {
      if (name.length > AUTH_VALIDATION.fullNameMaxLength) {
        result = { ...result, name: ERROR_MESSAGES.fullName };
      } else {
        result = { ...result, name: '' };
      }
    } else {
      result = { ...result, name: ERROR_MESSAGES.required };
    }

    if (email) {
      if (!email.match(AUTH_VALIDATION.validEmail)) {
        result = { ...result, email: ERROR_MESSAGES.email };
      } else {
        result = { ...result, email: '' };
      }
    } else {
      result = { ...result, email: ERROR_MESSAGES.required };
    }

    if (!result.email && !result.name) {
      result = { ...result, isValid: true };
    }

    return result;
  }

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const createContactInput: CreateContactInput = {
      email: '',
      name: '',
    };
    const formData = new FormData(event.currentTarget);

    for (const [key, value] of formData.entries()) {
      createContactInput[key] = value;
    }

    const { isValid, ...result } = validateInput(createContactInput);
    setErrorMessages(result);

    if (isValid) {
      createContact({
        variables: {
          input: {
            createdBy: _id,
            name: createContactInput.name,
            email: createContactInput.email,
          },
        },
      });
    }
  }

  return (
    <section className="h-screen">
      <Header title={CREATE_CONTACT.headerTitle} backButton={<BackButton back={goToScreen} />} />
      <form
        className="min-h-[calc(100vh-48px)] px-10 pt-10 relative"
        onSubmit={submitHandler}
        noValidate
      >
        <Input
          type={CREATE_CONTACT.nameInput.type}
          label={CREATE_CONTACT.nameInput.label}
          inputName={CREATE_CONTACT.nameInput.inputName}
          placeholder={CREATE_CONTACT.nameInput.placeholder}
          required={CREATE_CONTACT.nameInput.required}
          errorMessage={errorMessages.name}
        />
        <div className="mb-4"></div>
        <Input
          type={CREATE_CONTACT.emailInput.type}
          label={CREATE_CONTACT.emailInput.label}
          inputName={CREATE_CONTACT.emailInput.inputName}
          placeholder={CREATE_CONTACT.emailInput.placeholder}
          required={CREATE_CONTACT.emailInput.required}
          errorMessage={errorMessages.email}
        />
        <div className="mb-10"></div>
        {data?.createContact && (
          <span className="block text-center text-xl text-teal-700">{CREATE_CONTACT.success}</span>
        )}
        {error && (
          <span className="block text-center text-xl text-teal-700">{CREATE_CONTACT.failed}</span>
        )}
        <Button
          type="submit"
          label={CREATE_CONTACT.saveButton.label}
          isLoading={loading}
          className="w-4/5 h-12 absolute top-[90%] rounded-3xl text-white bg-teal-700"
        />
      </form>
    </section>
  );
}
