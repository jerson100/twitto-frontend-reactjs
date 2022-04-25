import { TOKENS } from "../../configs/token";

class AuthToken {
  static add(token) {
    localStorage.setItem(TOKENS.AUTH_TOKEN, token);
  }
  static remove() {
    localStorage.removeItem(TOKENS.AUTH_TOKEN);
  }
  static get() {
    return localStorage.getItem(TOKENS.AUTH_TOKEN);
  }
}

export { AuthToken };
