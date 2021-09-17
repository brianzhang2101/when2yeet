import { Router } from "express";
import { Event } from "../types";
import firebase from "../util/firebase";

const router = Router();

const ref = firebase.database().ref("events");

router.post("/create", (req, res) => {
  const { eventName, description, dates, startHour, endHour, admin } = req.body;

  const newEvent: Event = {
    eventName,
    description,
    members: [admin],
    dates,
    startHour: parseInt(startHour, 10),
    endHour: parseInt(endHour, 10),
  };

  const testData = newEvent;
  const key = ref.push(testData).key;
  if (key !== null) {
    res.send({ key });
    console.log(`Added ${key} to database!`);
  } else {
    console.error("Database push had an error!");
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  ref.once(
    "value",
    function (snapshot) {
      res.send(snapshot.child(id));
    },
    function (error) {
      console.error(error);
    }
  );
});

module.exports = router;
