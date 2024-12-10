import express from 'express';
import "dotenv/config";
import { router } from "./app/router.js";
import session from 'express-session';
const app = express();

// Configuration du view engine
app.set("view engine", "ejs");
app.set("views", "./app/views");

// Configuration du dossier statique
app.use(express.static("./public"));

// Body parser
app.use(express.urlencoded({ extended: true }));
//Session Express
app.use(session({
  secret: "mypassword",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
// Configurer l'app
app.use(router);


// Lancer le serveur
const port = process.env.PG_PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server started at http://localhost:${port}`);
});