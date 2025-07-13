import express, { Express } from "express";
import apiRouter from "./routes";
import cron from "node-cron";
import cors from "cors";
import { cleanOldRefreshTokens } from "./jobs/tokenCleanup.job";
import multer from "multer";

process.loadEnvFile("../../.env");
const app: Express = express();

 const uploader = multer({ dest: 'tmp/'});

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

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