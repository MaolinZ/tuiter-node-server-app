import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())

import HelloController from './controllers/hello-controller.js'
import UsersController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

HelloController(app)
UsersController(app)
TuitsController(app)

app.listen(process.env.PORT || 4000)