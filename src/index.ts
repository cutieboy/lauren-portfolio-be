import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import loginRouter from "./routes/login";

dotenv.config();

const app = express();

//MIDDLEWARES
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//ROUTES
app.use("/login", loginRouter);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

export default app;
