import { URL } from "../configs/api";
import { AuthToken } from "../utils/models/token";
/**
 * Crea un nuevo tweet
 * @param description Descripción del tweet
 * @returns
 */
const createTweet = async (description) => {
  const access_token = AuthToken.get();

  const data = await fetch(`${URL}/tweets`, {
    body: JSON.stringify({
      description: description,
    }),
    method: "POST",
    headers: {
      authorization: `Bearer ${access_token}`,
      "content-type": "application/json",
    },
  });

  const dataJson = await data.json();

  if (!data.ok) {
    throw dataJson.message || "Ocurrió un error al procesar la solicitud";
  }

  return dataJson.data;
};

/**
 * Nos permite obtener todos los tweets del usuario logueado en el sistema, nos muestra en la linea del tiempo, tanto los tweets del usuario como a los que sigue.
 * @returns
 */
const getFeed = async () => {
  const access_token = AuthToken.get();

  const data = await fetch(`${URL}/tweets/timeline/feed`, {
    headers: {
      authorization: `Bearer ${access_token}`,
      "content-type": "application/json",
    },
  });

  const dataJson = await data.json();

  if (!data.ok) {
    throw dataJson.message || "Ocurrió un error al procesar la solicitud";
  }

  return dataJson.data;
};

export default { createTweet, getFeed };
