import express from "express";
import userRoutes from "./routes/userRoutes.js";
import db from "./config/db.js";

// crear la app
const app = express();

// Conexión base de datos
try {
  await db.authenticate();
  console.log("Conexión correcta a la base de datos");
} catch (error) {
  console.log(error);
}

//Habilitar pug
app.set("view engine", "pug");
app.set("views", "./views");

//Carpeta publica para los estaticos
app.use(express.static("public"));

//Routing
app.use("/auth", userRoutes);

//Definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
