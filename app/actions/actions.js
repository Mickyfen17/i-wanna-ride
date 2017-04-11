import { USER_SIGNED_IN } from './action_types';

export const userSignIn = (user) => {
  return {
    type: USER_SIGNED_IN,
    user,
  };
};