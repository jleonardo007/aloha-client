import { AUTH_STORAGE } from 'src/constants/auth';
import { UserData } from 'src/graphql/types/user';

export function saveUser(userData: UserData) {
  if (localStorage.user_data) return;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { accessToken, ...user } = userData;
  localStorage.setItem(AUTH_STORAGE, JSON.stringify(user));
}

export function readUser(): UserData | null {
  if (!localStorage.user_data) return null;
  return JSON.parse(localStorage.user_data);
}
