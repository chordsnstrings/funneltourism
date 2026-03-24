import { Router, type IRouter } from "express";
import healthRouter from "./health";
import leadsRouter from "./leads";
import packagesRouter from "./packages";
import { apiLimiter } from "../middleware/rate-limit";

const router: IRouter = Router();

router.use(apiLimiter);
router.use(healthRouter);
router.use(leadsRouter);
router.use(packagesRouter);

export default router;
