import express from "express";
import morgan from "morgan";
import routers from "../routes/publication.routes.js";
import cors from "cors";
const app = express();
let corsOptions = {
  allowedHeaders: [
    "sessionId",
    "Content-Type",
    "Authorization",
    "authorization",
  ],
  exposedHeaders: ["sessionId"],
  origin: ["https://eccentrictoad.com"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  preflightContinue: false,
};
app.use(express.json());
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use("/publication", routers);

export default app;
