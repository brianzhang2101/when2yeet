import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Event } from "../types";

type IParams = {
  key: string;
};

const Poll = () => {
  const { key } = useParams<IParams>();
  const [eventData, setEventData] = useState<Event>();

  const getData = () => {
    axios
      .get(`http://localhost:3001/api/events/${key}`)
      .then(({ data }) => {
        setEventData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  });

  return (
    <div>
      <h5>We are on page {key}</h5>
      <h3>{eventData?.eventName}</h3>
      <h4>{eventData?.description}</h4>
      <h4>Hosted by {eventData?.members[0].name}</h4>
    </div>
  );
};

export default Poll;
