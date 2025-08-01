import express, { Express } from "express";
import apiRouter from "./routes";
import cron from "node-cron";
import cors from "cors";
import { cleanOldRefreshTokens } from "./jobs/tokenCleanup.job";
import cloudinaryConnect from "./config/cloudinary.config";

process.loadEnvFile("../../.env");
const app: Express = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
cloudinaryConnect();

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