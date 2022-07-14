import { URL } from "../configs/api";
import { AuthToken } from "../utils/models/token";
/**
 * Crea un nuevo tweet
 * @param {string} description - Descripción del tweet
 * @returns {object} Objeto con la información de la respuesta
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
const getFeed = async (per_page = 2) => {
  const access_token = AuthToken.get();

  const data = await fetch(`${URL}/tweets/timeline/feed?per_page=${per_page}`, {
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
 * Obtener los siguientes per_page registros antes de la fecha dateTime
 * @param dateTime {number} Tiempo en milisegundos
 * @param per_page {number} Cantidad máxima de documentos a obtener
 * @author Jerson Omar, Ramírez Ortiz.
 * @returns {Promise<*>}
 */
const getByDateOfLastFeed = async (dateTime, per_page = 2) => {
  const access_token = AuthToken.get();
  const data = await fetch(`${URL}/tweets/timeline/feed?datetime=${dateTime}&per_page=${per_page}`, {
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
}

const deleteTweet = async (idTweet) => {
  const access_token = AuthToken.get();
  const data = await fetch(`${URL}/tweets/${idTweet}`, {
    method: "delete",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${access_token}`,
    },
  });

  if (!data.ok) {
    throw "No se pudo eliminar el tweet";
  }
  return true;
};

export default { createTweet, getFeed, deleteTweet, getByDateOfLastFeed };
