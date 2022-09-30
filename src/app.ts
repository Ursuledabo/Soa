import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors"
import exampleRoute from './routes/exampleRoutes'

const app = express();

app.use('/', exampleRoute)

app.get("/", (req,res)=>{
    res.json({
        message: "hello World"
    })
})

app.use(()=> {
     throw createHttpError(404, "Route introuvable");
})

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err.message, err.statusCode);
    if(res.headersSent){
        return next(err);
    }

    res.status(err.statusCode || 500).json({message:err.message || "Error inconnue"})
};

app.use(errorHandler);

app.listen(9000,()=>{
    console.log("Server Started")
})