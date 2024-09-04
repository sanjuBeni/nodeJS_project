// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
dotenv.config({ path: "./env" });
import connectionDB from "./db/db_config.js";
import { app } from "./app.js";

connectionDB()
  .then(() => {
    {
      app.listen(process.env.PORT || 4000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });
    }
  })
  .catch((err) => {
    console.log(`Connection failed, Error : ${err.message}`);
    app.on("error", (err) => {
      throw err.message;
    });
  });
