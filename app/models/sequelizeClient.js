// Import des variables d'environnement
import "dotenv/config";

// Import du constructeur Sequelize
import { Sequelize } from "sequelize";

// Création d'une instance de connexion à la base de données
export const sequelize = new Sequelize(process.env.PG_URL, {});

// Tester (facultatif)
// sequelize.authenticate();


