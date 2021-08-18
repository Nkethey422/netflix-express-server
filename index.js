const express = require("express");
const PORT = 5000;
const axios = require("axios");
const app = express();
const cors = require("cors");

const BASE_URL = "https://api.themoviedb.org/3";
const REACT_APP_TOKEN = "4ec4b0d1e8dc8fc71ee4f5122df3e6c8";

app.use(cors());

app.get("/*", async (req, res, next) => {
  try {
    const { url } = req;
    const resource = `${BASE_URL}${url}&api_key=${REACT_APP_TOKEN}`;
    const { data } = await axios.get(resource);
    res.status(200).json({ data });
  } catch (error) {
    console.log({ error: true });
    res.status(404).end();
  }
});

app.listen(PORT, () => console.log("ok"));
