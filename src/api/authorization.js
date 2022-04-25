import { URL } from "../configs/api";

const login = async (email, password) => {
  const data = await fetch(`${URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({ username: email, password }),
    headers: {
      "content-type": "application/json",
    },
  });
  const dataJson = await data.json();
  if (!data.ok) {
    let msg = "Ocurrió un error al procesar";
    switch (data.status) {
      case 401:
        msg = "El usuario o contraseña son incorrectos.";
        break;
      case 400:
        msg = dataJson.message;
    }
    throw msg;
  }
  return dataJson;
};

export { login };
