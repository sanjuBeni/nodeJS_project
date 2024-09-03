// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectionDB from "./db/db_config.js";
dotenv.config({ path: "./env" });

connectionDB();
