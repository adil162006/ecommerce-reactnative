import express from 'express';
import path from "path"
import {connectDB} from './config/db.js';
import { ENV } from "./config/env.js";

const app = express();

const __dirname = path.resolve();


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get("/api/health", (req, res) => {
  res.status(200).send("OK");
});

// make our app ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../admin/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"));
  });
}


const startServer = async () => {
  await connectDB();
  app.listen(ENV.PORT, () => {
    console.log("Server is up and running");
  });
};

startServer();