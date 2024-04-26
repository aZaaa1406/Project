import express from 'express';
import { methods as authentication} from './controllers/authentication.controller.js';
//fix para dirname
import path, { dirname } from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
//Server
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Servidor trabajando en puerto", app.get("port"));

//Configuracion
app.use(express.static(__dirname + "/public"))
app.use(express.json());
app.set('view engie', 'ejs')

//rutas
app.get("/", (req, res)=> res.sendFile(__dirname + "/pages/index.html"));
app.get("/register", (req, res)=> res.sendFile(__dirname + "/pages/register.html"))
app.get("/login", (req, res)=> res.sendFile(__dirname + "/pages/login.html"))
app.get("/user", (req, res) => res.render(__dirname + "/views/user.ejs"))
app.post("/api/register", authentication.register)
app.post("/api/login", authentication.login)