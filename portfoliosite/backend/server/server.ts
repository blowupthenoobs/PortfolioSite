import express, { Request, Response } from "express";
import path from "path";
import userRouter from "../express-routers/user-router";
import bodyParser from "body-parser";
import helmet from "helmet";
import busboy from "connect-busboy";
import compression from "compression";
import http from "http";
import cookieParser from "cookie-parser";
import env from "../enviroment/env";
import { middlewareErrorHandler } from "../middleware/utils/middleware-utils";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();


const app = express();
const publicPath = path.join(__dirname, "..", "..", "dist-frontend");

let server: any;
let serverHttps: any;

server = http.createServer(app);

require("../db/connections/mongoose");

app.use(cors());
app.use(cookieParser(env.passwordCookie));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.static(publicPath, { index: false }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(
  busboy({
    highWaterMark: 2 * 1024 * 1024,
  })
);

app.use(userRouter);

app.use(middlewareErrorHandler);

app.get("*", (_: Request, res: Response) => {
  res.sendFile(path.resolve(publicPath, "index.html"));
});


export default { server, serverHttps };
