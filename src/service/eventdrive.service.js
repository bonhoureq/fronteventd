import { backend } from "./config";

export const getEvent = async () => {
  try {
    const res = await backend.get("/events");

    return res.data;
  } catch (error) {
    console.error(error);
    return;
  }
};

export const postEvent = async () => {
  try {
    await backend.post("/events");

    return;
  } catch (error) {
    console.error(error);
    return;
  }
};

export const deleteEvent = async () => {
  try {
    await backend.delete("/events/{eventId}");

    return;
  } catch (error) {
    console.error(error);
    return;
  }
};
