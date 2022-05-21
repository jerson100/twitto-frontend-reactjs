const AUTH_ACTIONS = {
  LOGIN: "[Auth]LOGIN",
  LOGOUT: "[Auth]LOGUT",
  SET_PREVIOUS_LOADING: "SET_PREVIOUS_LOADING",
};

const INITIAL_AUTH_STATE = {
  user: null,
  auth_token: null, //remove
  previousLoadingUser: true,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN:
      const { user: us, auth_token: token } = action.payload;
      return { ...state, user: us, auth_token: token };
    case AUTH_ACTIONS.LOGOUT:
      return { user: null, auth_token: null, previousLoadingUser: false };
    case AUTH_ACTIONS.SET_PREVIOUS_LOADING:
      return { ...state, previousLoadingUser: action.payload };
    default:
      return state;
  }
};

export { authReducer, INITIAL_AUTH_STATE, AUTH_ACTIONS };
