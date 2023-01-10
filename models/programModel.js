import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Program = db.define('tbl_program',{
    judul_program: DataTypes.STRING,
    deskripsi_program: DataTypes.STRING,
    isi_program: DataTypes.TEXT,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});

export default Program;

(async()=>{
    await db.sync();
})();