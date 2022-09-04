import Router from "express-promise-router";
import { validateSchema } from "../middlewares/validateSchema";
import { SignupUserSchema, SigninUserSchema } from "../schemas/User.schema";
import { signinHandler, signupHandler } from "../controllers/auth.controllers";

const router = Router();

router.post("/signup", validateSchema(SignupUserSchema), signupHandler);

router.post("/signin", validateSchema(SigninUserSchema), signinHandler);

export default router;
