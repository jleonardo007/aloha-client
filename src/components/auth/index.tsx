import { useState, FormEvent } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import {
  AUTH_TEXTS,
  INPUTS,
  BUTTONS,
  GOOGLE_BUTTON,
  AUTH_VALIDATION,
  ERROR_MESSAGES,
} from 'src/constants/auth';
import {
  AuthParentProps,
  AuthFormProps,
  AuthLinksProps,
  Credentials,
  UserCredentials,
} from 'src/types/auth';
import { Input } from 'src/components/common/input';
import { Button } from 'src/components/common/button';
import loginBackground from 'src/resources/images/aloha-login-bg.svg';
import loginImage from 'src/resources/images/login-image.webp';
import logo from 'src/resources/images/aloha-logo.webp';

function AuthLinks({ text, linkText, onClick }: AuthLinksProps) {
  return (
    <p className="w-4/5 mx-auto text-center text-xs text-gray-400">
      {text}
      <span
        className="ml-1 cursor-pointer capitalize text-green-500"
        onClick={onClick}
        role="presentation"
      >
        {linkText}
      </span>
    </p>
  );
}

function AuthForm({
  signUpForm,
  children,
  error,
  isLoading,
  getCurrentUser,
  toggleForm,
}: AuthFormProps) {
  const [errorMessages, setErrorMessages] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  function validateCredentials({ fullName, email, password }: UserCredentials) {
    let result = {
      fullName: '',
      email: '',
      password: '',
      isValid: false,
    };

    if (signUpForm) {
      if (fullName) {
        if (fullName.length > AUTH_VALIDATION.fullNameMaxLength) {
          result = { ...result, fullName: ERROR_MESSAGES.fullName };
        } else {
          result = { ...result, fullName: '' };
        }
      } else {
        result = { ...result, fullName: ERROR_MESSAGES.required };
      }
    }

    if (password) {
      if (password.length < AUTH_VALIDATION.passwordMinLength) {
        result = { ...result, password: ERROR_MESSAGES.password };
      } else {
        result = { ...result, password: '' };
      }
    } else {
      result = { ...result, password: ERROR_MESSAGES.required };
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

    if (!result.email && !result.fullName && !result.password) {
      result = { ...result, isValid: true };
    }

    return result;
  }

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const userCredentials: Credentials = {
      fullName: '',
      email: '',
      password: '',
    };
    const formData = new FormData(event.currentTarget);

    for (const [key, value] of formData.entries()) {
      userCredentials[key] = value;
    }

    const { isValid, ...result } = validateCredentials(userCredentials);
    setErrorMessages(result);

    if (isValid) {
      getCurrentUser(userCredentials, signUpForm);
    }
  }

  return (
    <form className="h-full pt-20 lg:pt-4" onSubmit={submitHandler} noValidate>
      <div className="w-[100px] h-[100px] mx-auto mb-4 rounded-full border-4 border-green-500 lg:hidden">
        <img className="w-full h-full" src={logo} alt="aloha-logo" />
      </div>
      <h1 className="mb-4 text-2xl text-center lg:text-4xl lg:ml-8 lg:text-left text-gray-700 capitalize">
        {AUTH_TEXTS.mainText}
      </h1>
      {error && (
        <h2 className="mb-4 text-center text-sm text-red-600 capitalize lg:text-xl">
          {error.message}
        </h2>
      )}
      {signUpForm && (
        <div className="w-4/5 mx-auto mb-2">
          <Input
            type={INPUTS.fullName.type}
            label={INPUTS.fullName.label}
            inputName={INPUTS.fullName.inputName}
            placeholder={INPUTS.fullName.placeholder}
            required={INPUTS.fullName.required}
            errorMessage={errorMessages.fullName}
          />
        </div>
      )}
      <div className="input w-4/5 mx-auto mb-2">
        <Input
          type={INPUTS.email.type}
          label={INPUTS.email.label}
          inputName={INPUTS.email.inputName}
          placeholder={INPUTS.email.placeholder}
          required={INPUTS.email.required}
          errorMessage={errorMessages.email}
        />
      </div>
      <div className="w-4/5 mx-auto mb-6">
        <Input
          type={INPUTS.password.type}
          label={INPUTS.password.label}
          inputName={INPUTS.password.inputName}
          placeholder={INPUTS.password.placeholder}
          required={INPUTS.password.required}
          errorMessage={errorMessages.password}
        />
      </div>
      <div className="w-4/5 h-10 mx-auto mb-3">
        <Button
          type={signUpForm ? BUTTONS.signUp.type : BUTTONS.signIn.type}
          label={signUpForm ? BUTTONS.signUp.label : BUTTONS.signIn.label}
          className="w-full h-full capitalize rounded-[4px] bg-green-500 text-white"
          isLoading={isLoading}
        />
      </div>
      <div className="w-4/5 h-10 mx-auto mb-5">{children}</div>
      {signUpForm ? (
        <AuthLinks
          text={AUTH_TEXTS.signInLink.text}
          linkText={AUTH_TEXTS.signInLink.linkText}
          onClick={toggleForm}
        />
      ) : (
        <AuthLinks
          text={AUTH_TEXTS.signUpLink.text}
          linkText={AUTH_TEXTS.signUpLink.linkText}
          onClick={toggleForm}
        />
      )}
    </form>
  );
}

export function Auth({
  getCurrentUser,
  getCurrentUserFromGoogle,
  error,
  isLoading,
  widthForGoogleButton,
}: AuthParentProps) {
  const [signUpForm, toggleForm] = useState(false);

  function handleToogle() {
    toggleForm((prevState) => !prevState);
  }

  return (
    <section
      className="h-screen font-display lg:grid lg:place-content-center lg:bg-cover"
      style={{ backgroundImage: `url(${loginBackground})` }}
    >
      <div className="h-full lg:flex lg:w-[65vw] lg:h-[65vh] lg:rounded-[2.5rem] lg:p-8 bg-white">
        <div className="h-full lg:w-2/5">
          <AuthForm
            signUpForm={signUpForm}
            getCurrentUser={getCurrentUser}
            toggleForm={handleToogle}
            error={error}
            isLoading={isLoading}
          >
            <GoogleLogin
              text={signUpForm ? GOOGLE_BUTTON.signUpText : GOOGLE_BUTTON.signInText}
              logo_alignment={GOOGLE_BUTTON.logoAlignment}
              context={signUpForm ? GOOGLE_BUTTON.contextSignUp : GOOGLE_BUTTON.contextSignIn}
              width={widthForGoogleButton}
              useOneTap={!signUpForm}
              onSuccess={(response) => {
                if (response.credential) {
                  getCurrentUserFromGoogle(response.credential, signUpForm);
                }
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </AuthForm>
        </div>
        <div
          className="h-full hidden lg:block lg:w-3/5 lg:bg-contain lg:bg-no-repeat lg:bg-center"
          style={{ backgroundImage: `url(${loginImage})` }}
        ></div>
      </div>
    </section>
  );
}
