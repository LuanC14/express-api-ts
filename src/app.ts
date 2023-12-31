require("dotenv").config()
import express, {Request, Response, NextFunction} from 'express'
import config from "config"
import routes from './routes/index.routes'
import {connect} from '../config/db'
import Logger from '../config/logger'
import morganMiddleware from './middlewares/morganMiddleware'

const app = express()
app.use(express.json())
app.use(morganMiddleware)

app.use("/api",routes)

const PORT = config.get<number>("port")

app.listen(PORT, async () => {
  await connect()
  Logger.info(`HTTP server is running on port ${PORT}`)
})

