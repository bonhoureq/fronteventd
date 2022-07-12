import React, { useState, useEffect } from "react";
import "./App.css";

import { postEvent } from "./service/eventdrive.service";

const Form = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [debut, setDebut] = useState("");
  const [fin, setFin] = useState("");
  const [returnData, setReturnData] = useState([]);

  const initPage = async () => {
    try {
      const data = await postEvent();
      setName(data);
      setDescription(data);
      setDebut(data);
      setFin(data);
      setReturnData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    const temporary = returnData;
    temporary.push({
      name: name,
      description: description,
      debut: debut,
      fin: fin,
    });
    setReturnData(temporary);
  };

  useEffect(() => {
    if ((!name, !description, !debut, !fin)) initPage();
  });

  return (
    <div className="Form">
      <input type={"text"} onChange={(e) => setName(e.target.value)} />
      <input type={"text"} onChange={(e) => setDescription(e.target.value)} />
      <input type={"date"} onChange={(e) => setDebut(e.target.value)} />
      <input type={"date"} onChange={(e) => setFin(e.target.value)} />
      <button onClick={() => handleSubmit()}>Submit</button>
      <div>
        {" "}
        {returnData &&
          returnData.map((data, i) => (
            <p key={i}>
              {data.name} {data.description} {data.debut} {data.fin}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Form;
