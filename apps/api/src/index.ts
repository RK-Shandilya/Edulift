import express, { Express } from "express";
import apiRouter from "./routes";
process.loadEnvFile("../../.env");
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api" ,apiRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})

export default app;