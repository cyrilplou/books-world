import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelizeClient.js";

export class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Gère automatiquement l'incrémentation des IDs
    allowNull: false,    // Empêche les valeurs NULL
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pseudo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "user"
});

// Test
// const testUser = await User.create({ firstname: "", lastname:"", pseudo:"",email:".com",password:"" }); // méthode de classe
// console.log(testUser);
