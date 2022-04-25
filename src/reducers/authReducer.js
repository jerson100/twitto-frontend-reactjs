const AUTH_ACTIONS = {
  LOGIN: "[Auth]LOGIN",
  LOGOUT: "[Auth]LOGUT",
};

const INITIAL_AUTH_STATE = {
  user: null,
  auth_token: null, //remove
};

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN:
      const { user: us, token: auth_token } = action.payload;
      return { user: us, auth_token: auth_token };
    case AUTH_ACTIONS.LOGOUT:
      return { user: null, auth_token: null };
  }
};

export { authReducer, INITIAL_AUTH_STATE, AUTH_ACTIONS };
