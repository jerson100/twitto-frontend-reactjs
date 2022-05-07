import { URL } from "../configs/api";
import { AuthToken } from "../utils/models/token";

export const whoIAm = async () => {
  const token = AuthToken.get();
  const data = await fetch(`${URL}/auth/whoIam`, {
    method: "GET",
    headers: {
      "content-type": "applicaction/json",
      authorization: `Bearer ${token}`,
    },
  });
  const dataJson = await data.json();
  if (!data.ok) {
    throw dataJson.message || "Ocurrió un error al procesar";
  }
  return dataJson;
};
