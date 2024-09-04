import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: [process.env.CORS_ORIGIN],
    method: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
//Express JSON used for the get json data from the client side
app.use(express.json({ limit: "20kb" }));

//Express urlencoded used for the uncode or get data form the any url or convert the +, %20, etc into simple url or string
app.use(
  express.urlencoded({
    extended: true, // It's used for nested object get form the url
    limit: "16kb",
  })
);

//Express static used for File configuratioin when we want to store any file into our server then Express static use, it's take root (where we want to store file) or option parameter
app.use(express.static("public"));

// cookieParser middleware for parsing cookies
app.use(cookieParser());

export { app };

// cookieParser  ---> Used for the access cookies form the client side and also client side cookies set form the server side  or perform the crud operation on clinet side cookies  and it store the secure cookies into browser and only server can read or remove this cookies

// app.use(cors({
//     origin: ["http://localhost:3000", "https://your-domain.com"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//     allowedHeaders: ["Content-Type", "Authorization"],
//     exposedHeaders: ["Authorization"],
//     maxAge: 600,
//     preflightContinue: false,
//     optionsSuccessStatus: 204,
//     optionsMaxAge: 600,
//     optionsRequestHeaders: ["Content-Type", "Authorization"]
// }));
