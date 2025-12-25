import express from 'express';
import {connectDB} from './config/db.js';
import { ENV } from "./config/env.js";

const app = express();



app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get("/api/health", (req, res) => {
  res.status(200).send("OK");
});

const startServer = async () => {
  await connectDB();
  app.listen(ENV.PORT, () => {
    console.log("Server is up and running");
  });
};

startServer();