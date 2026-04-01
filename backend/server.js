const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok-from-add-endpoint", timestamp: new Date() });
});

app.get("/api/activities", (req, res) => {
  res.json([]);
});

app.listen(3000, () => console.log("VitalSync API on :3000"));
