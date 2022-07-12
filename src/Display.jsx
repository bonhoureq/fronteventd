import React, { useEffect, useState } from "react";

import { getEvent } from "./service/eventdrive.service";

const Display = () => {
  const [events, setEvent] = useState();

  const initPage = async () => {
    try {
      const data = await getEvent();
      setEvent(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!events) initPage();
  }, []);

  return (
    <div>
      <div> {events && events.map((data, i) => <p key={i}></p>)}</div>
    </div>
  );
};

export default Display;
