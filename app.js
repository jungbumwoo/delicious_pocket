import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;


const handleListening = () =>
    console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from my ass");


const handleProfile = (req, res) => res.send("You are on my profile");


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/pocket")
app.get("/addStore")
app.get("/storeDetail")
app.get("/edit_store")

app.get("/search")

app.get("/user", handleProfile);
app.get("/login")
app.get("/logout")
app.get("/edit")
app.get("/password")

app.listen(PORT, handleListening);

export default app;