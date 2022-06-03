import { URL } from "../configs/api";
import { AuthToken } from "../utils/models/token";

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

export default { createTweet };
