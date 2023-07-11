import { body } from 'express-validator'
import { Request, Response, NextFunction } from 'express'

export const movieCreateValidation = () => {
    return [
        body("title").isString().withMessage("Título obrigatório"),
        body("rating").isNumeric().withMessage("A nota precisa ser do tipo numérico")
            .custom((value: number) => {
                if (value < 0 || value > 10) {
                    throw new Error("A nota precisa ser entre 0 a 10")
                }
                return true
            }),
        body("description").isString().withMessage("A descrição é obrigatória"),
        body("director").isString().withMessage("O nome do diretor é obrigatório"),
        body("stars").isArray().withMessage("Os principais atores são obrigatório"),
        body("poster").isURL().withMessage("A imagem precisa ser uma URL")
    ]
}