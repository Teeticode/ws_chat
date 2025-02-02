const express = require("express");
const router = express.Router();
const PreferenceList = require("../../preferences"); // Import the PreferenceList model

// Define a route to fetch data from the PreferenceList table
router.get("/", async (req, res) => {
  try {
    // Fetch all records from the PreferenceList table
    const preferences = await PreferenceList.find();

    // Respond with the fetched preferences
    res.json(preferences);
  } catch (err) {
    // If an error occurs, respond with an error message
    console.error("Error fetching preferences:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
