import { Router, Request, Response } from "express";
import MoviesController from "../controllers/MoviesController";
import { validate } from "../middlewares/validators/handleValidation";
import { movieCreateValidation } from "../middlewares/validators/moviesValidator";

const moviesRouter = Router()
const moviesController = new MoviesController()

moviesRouter.get("/", moviesController.getAllMovies)
moviesRouter.get("/:id", moviesController.getMovie)
moviesRouter.post("/", movieCreateValidation(), validate, moviesController.createMovie)
moviesRouter.patch("/:id", movieCreateValidation(), validate, moviesController.updateMovie)
moviesRouter.delete("/:id", moviesController.deleteMovie)

export default moviesRouter