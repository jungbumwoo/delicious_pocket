import express from "express";
import routes from "../routes";

import { userdetail, editprofile, changepassword } from "../controllers/usercontroller";

const userRouter = express.Router();

userRouter.get(routes.userdetail, userdetail);
userRouter.get(routes.editProfile, editprofile);
userRouter.get(routes.changePassword, changepassword);


export default userRouter;
