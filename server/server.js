import express, { static as eStatic, urlencoded, json } from "express";
import htmlRoutes from "./routes/htmlRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(eStatic("../client/dist"));
app.use(urlencoded({ extended: true }));
app.use(json());

htmlRoutes(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
