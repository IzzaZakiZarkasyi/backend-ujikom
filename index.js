import  express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import productroute from "./routes/route.js";

const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(productroute);

app.listen(5000, ()=> console.log('Server Up and running...'));