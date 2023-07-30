export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

export const setCurrentUser = (user) => {
  // create Action
  return { type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user };
};
