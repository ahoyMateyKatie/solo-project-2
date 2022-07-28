const express = require("express");

const locationController = require("../controllers/locationController");

const router = express.Router();

// need a get request to render all the locations to the screen
// endpoint will be / and go to app which will go to

router.get("/", locationController.getPlaces, (req, res) =>
  res.status(200).json(res.locals.chars)
);

// need a post request to add location to the screen

router.post("/itinerary", locationController.addPlace, (req, res) =>
  res.status(200).json(res.locals.addLoc)
);

module.exports = router;
