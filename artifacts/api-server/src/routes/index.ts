import { Router, type IRouter } from "express";
import healthRouter from "./health";
import leadsRouter from "./leads";
import packagesRouter from "./packages";

const router: IRouter = Router();

router.use(healthRouter);
router.use(leadsRouter);
router.use(packagesRouter);

export default router;
