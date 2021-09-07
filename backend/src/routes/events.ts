import { Router } from "express";
import { Event } from "../types";

const router = Router();

const events: Map<string, Event> = new Map();

router.post("/create", (req, res) => {
  const { eventName, description, startDate, endDate, startHour, endHour } =
    req.body;
  // TODO: Use different method of generating id
  const id = events.size.toString();
  const newEvent = {
    id,
    eventName,
    description,
    members: [],
    startDate,
    endDate,
    startHour: parseInt(startHour, 10),
    endHour: parseInt(endHour, 10),
  };
  events.set(id, newEvent);
  res.send({ id });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (events.size > parseInt(id, 10)) {
    res.json(JSON.stringify(events.get(id)));
  } else {
    console.log(`Could not find id: ${id}`);
  }
});

module.exports = router;
