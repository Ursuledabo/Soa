import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors"
import exampleRoute from './routes/exampleRoutes'
import mongoose from 'mongoose'
import { DB, PORT } from "./config";
import { errorHandler } from "./middleware/errorHandler";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use('/', exampleRoute);

app.get("/", (req,res)=>{
    res.json({
        message: "hello World"
    })
});

app.use(()=> {
     throw createHttpError(404, "Route introuvable");
});

app.use(errorHandler);

// app.listen(9000,()=>{
//     console.log("Server Started")
// })

mongoose
    .connect(DB)
    .then(()=> {
    console.log("Connexion réussie");
    app.listen(PORT, ()=> {
        console.log(`Listening on Port ${PORT}`)
    });
})
    .catch(()=> {
        throw createHttpError(501, "Connexion échouée");
    });