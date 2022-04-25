import { createContext, useCallback, useEffect, useReducer } from "react";
import { login } from "../api/authorization";
import { whoIAm } from "../api/user";
import {
  authReducer,
  AUTH_ACTIONS,
  INITIAL_AUTH_STATE,
} from "../reducers/authReducer";

import { AuthToken } from "../utils/models/token";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_AUTH_STATE);

  useEffect(() => {
    const loadUser = async () => {
      if (AuthToken.get()) {
        try {
          const data = await whoIAm();
          dispatch({
            type: AUTH_ACTIONS.LOGIN,
            payload: {
              user: data.user,
              auth_token: data.token,
            },
          });
          AuthToken.add(data.token);
        } catch (e) {
          console.log(e);
          AuthToken.remove();
        }
      }
    };
    loadUser();
  }, []);

  const onLogin = useCallback((email, password) => {
    const log = async () => {
      try {
        const { token, user } = await login(email, password);
        dispatch({
          type: AUTH_ACTIONS.LOGIN,
          payload: {
            user,
            auth_token: token,
          },
        });
        AuthToken.add(token);
      } catch (msg) {
        console.log(`Error: ${msg}`);
      }
    };
    log();
  }, []);

  const onLogout = useCallback(() => {
    const logu = async () => {
      try {
        dispatch({ type: AUTH_ACTIONS.LOGOUT });
        AuthToken.remove();
      } catch (msg) {
        console.log(`Error: ${msg}`);
      }
    };
    logu();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        auth_token: state.auth_token,
        onLogin,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
