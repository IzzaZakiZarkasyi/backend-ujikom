import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Faq = db.define('tbl_faq',{
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
},{
    freezeTableName: true
});

export default Faq;

(async()=>{
    await db.sync();
})();