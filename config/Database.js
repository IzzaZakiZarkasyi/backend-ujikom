import { Sequelize } from "sequelize";

const db = new Sequelize('layanan_publik', 'root', '',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;