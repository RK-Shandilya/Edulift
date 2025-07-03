import express, { Express } from "express";
import apiRouter from "./routes";
import cron from "node-cron";
import { cleanOldRefreshTokens } from "./jobs/tokenCleanup.job";

process.loadEnvFile("../../.env");
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api" ,apiRouter);
const PORT = process.env.PORT || 3000;

// Run once a day
cron.schedule("0 0 * * *", () => {
    console.log("Running daily job to clean old refresh tokens");
    cleanOldRefreshTokens()
})

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})

export default app;