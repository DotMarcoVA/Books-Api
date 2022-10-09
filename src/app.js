/**
 * Import de Modulos Necesarios
 */
import express from "express";
import morgan from "morgan";
// Importar rutas desde el archivo de rutas
import bookRoutes from "./routes/index.routes.js";
import productRoutes from "./routes/index.routes.js";

// Llamar express en variable
const app = express();

/* Setear el puerto a 4000 */
app.set("port", process.env.PORT || 4000);

/* Middlewares */
app.use(morgan("dev"));
app.use(express.json());

/* Endpoint de Raiz */

app.get("/", (req, res) => {
    const status = 404;
    const mymeType = { "Content-type": "text/html" };
    res.writeHead(status, mymeType);
    res.write(`<html> <body> <img src="https://http.cat/200" alt=""> </body> </html>`);
});

/* Middleware que se ejecuta cada que inicia el servidor */
app.use("/api/books", bookRoutes);

// Exportar el componente app
export default app;
