import { Router, Request, Response } from "express";
import MoviesController from "../controllers/moviesController";

const moviesRouter = Router()
const moviesController = new MoviesController()

moviesRouter.post("/", moviesController.createMovie)

export default moviesRouter