import joi from "joi"

const updateBookSchema = joi.object({
    author: joi.string(),
    title: joi.string(),
    genre: joi.string().optional(),
    pages: joi.number().integer(),
    category: joi.string(),
    language: joi.string(),
    editorial: joi.string(),
    printingDate: joi.date(),
    isbn: joi.string(),
    coverage: joi.string(),
})
export default async(req, res, next) => {
    try {
        await updateBookSchema.validateAsync(req.body);
        next();
    } catch (error) {
        return res.status(400).json({
            msg: 'Error de validacion',
            error
        })
    }

}