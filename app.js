import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import storeRouter from "./routers/storeRouter";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";


const app = express();


app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use("/store", storeRouter);
app.use("/user", userRouter);


export default app;