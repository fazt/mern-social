import Router from "express-promise-router";

const router = Router();

router.get("/", (req, res) => res.sendStatus(200));

export default router;
