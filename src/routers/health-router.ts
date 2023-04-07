import express from "express"

import getHealth from "../infra/repositories/health-repository"

const healthRouter = express.Router()

healthRouter.get('/health', (req, res) => {
    const healthStatus = getHealth();
    res.status(200).json(healthStatus);
})

export default healthRouter;