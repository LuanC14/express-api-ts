import { Request, Response } from 'express'
import { MovielModel } from '../models/Movie'
import Logger from '../../config/logger'

class MoviesController {

  async createMovie(req: Request, res: Response) {
    try {
      const data = req.body
      const movie = await MovielModel.create(data)

      return res.status(201).json({ movie })

    } catch (error: any) {
      Logger.error(error.message)
    }
  }

  async getMovie(req: Request, res: Response) {

    try {

      const movie = await MovielModel.findById(req.params.id)

      if (!movie) {
        throw new Error("Filme não encontrado")
      }

      return res.status(200).json({ movie })
    } catch (error: any) {

      Logger.error(error.message)
      return res.status(404).send(error.message)
    }
  }

  async getAllMovies(req: Request, res: Response) {

    try {
      const movies = await MovielModel.find()

      if (!movies) {
        throw new Error("Nenhum filme encontrado")
      }

      return res.status(200).json({ movies })
    } catch (error: any) {
      Logger.error(error.message)

      return res.status(404).send(error.message)
    }
  }

  async updateMovie(req: Request, res: Response) {
    try {
      const id = req.params.id
      const data = req.body
      const movie = await MovielModel.findById(id)

      if (!movie) {
        throw new Error("Filme não encontrado")
      }

      await MovielModel.updateOne({ _id: id }, data)

      return res.status(200).json({ data })

    } catch (error: any) {
      Logger.error(error.message)

      if (error.message === "Filme não encontrado") {
        return res.status(404).send(error.message)
      } else {
        return res.status(500).send(error.message)
      }
    }
  }

  async deleteMovie(req: Request, res: Response) {

    try {
      const movie = await MovielModel.findById(req.params.id)

      if (!movie) {
        throw new Error("Filme não encontrado")
      }

      await movie.deleteOne()

      return res.status(200).send("Filme deletado")

    } catch (error: any) {
      Logger.error(error.message)
      return res.status(404).send(error.message)
    }



  }
}

export default MoviesController