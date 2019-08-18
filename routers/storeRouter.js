import express from "express";
import routes from "../routes";
import {
    pocket,
    addstore,
    storedetail,
    editstore
} from "../controllers/storecontroller";

const storeRouter = express.Router();

storeRouter.get(routes.pocket, pocket);
storeRouter.get(routes.addstore, addstore);
storeRouter.get(routes.storedetail, storedetail);
storeRouter.get(routes.editstore, editstore);




export default storeRouter;