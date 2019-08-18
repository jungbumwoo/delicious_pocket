import express from "express";
import routes from "../routes";

import { home, user, login, logout, edit, password } from "../controllers/usercontroller";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.user, user);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.password, password);


export default globalRouter;