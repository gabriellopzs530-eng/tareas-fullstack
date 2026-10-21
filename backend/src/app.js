import express from "express";
import morgan from "morgan";
import  indexRoutes from "./routes/index.routes.js";

const app = express();

//middlwaes
app.use(morgan("dev"));
app.use(express.json());

//rutas
app.use(indexRoutes);

//ruta no encontrada
app.use((req, res) =>{
    res.status(404).json ({message: "Not found"});
});

export default app;