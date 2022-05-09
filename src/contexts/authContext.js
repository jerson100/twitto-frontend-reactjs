import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";
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
          dispatch({
            type: AUTH_ACTIONS.SET_PREVIOUS_LOADING,
            payload: true,
          });
          const { data } = await whoIAm();
          dispatch({
            type: AUTH_ACTIONS.LOGIN,
            payload: {
              user: data.user,
              auth_token: data.token,
            },
          });
          AuthToken.add(data.token);
        } catch (e) {
          AuthToken.remove();
        } finally {
          dispatch({
            type: AUTH_ACTIONS.SET_PREVIOUS_LOADING,
            payload: false,
          });
        }
      } else {
        dispatch({
          type: AUTH_ACTIONS.SET_PREVIOUS_LOADING,
          payload: false,
        });
      }
    };
    loadUser();
  }, []);

  const onLogin = useCallback((email, password) => {
    const log = async () => {
      try {
        const { data } = await login(email, password);
        dispatch({
          type: AUTH_ACTIONS.LOGIN,
          payload: {
            user: data.user,
            auth_token: data.token,
          },
        });
        AuthToken.add(data.token);
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
        previousLoadingUser: state.previousLoadingUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
