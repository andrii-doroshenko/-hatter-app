const express = require("express");
const cors = require("cors");

require("dotenv").config();

const { PORT } = process.env || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/authenticate", async (req) => {
  const { username } = req.body;
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});
