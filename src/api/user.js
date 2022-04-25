import { URL } from "../configs/api";
import { AuthToken } from "../utils/models/token";

export const whoIAm = async () => {
  const token = AuthToken.get();
  const data = await fetch(`${URL}/whoIam`, {
    method: "POST",
    body: JSON.stringify(token),
    headers: {
      "content-type": "applicaction/json",
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
