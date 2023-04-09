const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/tuiter"

import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())

import mongoose from "mongoose";
mongoose.connect(CONNECTION_STRING);

import HelloController from './controllers/hello-controller.js'
import UsersController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

HelloController(app)
UsersController(app)
TuitsController(app)

app.listen(process.env.PORT || 4000)