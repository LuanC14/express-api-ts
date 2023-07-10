import { Request, Response} from 'express'
import { MovielModel } from '../models/Movie'
import Logger from '../../config/logger'

class MoviesController {

  async createMovie(req: Request, res: Response) {
    try {

      const data = req.body
      Logger.debug(data)
      const movie = await MovielModel.create(data)

    return res.status(201).json(movie)

    } catch(error: any) {
      Logger.error(`Erro no Sistema ${error.message}`)
    }

  }
}

export default MoviesController