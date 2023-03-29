import express from 'express'
const app = express()
app.use(express.json())

import HelloController from './controllers/hello-controller.js'
import UsersController from "./controllers/users/users-controller.js";

HelloController(app)
UsersController(app)

app.listen(4000)