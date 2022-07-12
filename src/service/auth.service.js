import { backend } from "./config";

export async function auth() {
  try {
    const resp = await backend.post("/token", {
      client_id: process.env.REACT_CLIENT_ID,
      client_secret: process.env.REACT_CLIENT_SECRET,
    });
    const data = await resp.data;
    const token = data.access_token;
    localStorage.setItem("api_token", token);

    return token;
  } catch (error) {
    console.error(error);
    return;
  }
}

export default auth;
