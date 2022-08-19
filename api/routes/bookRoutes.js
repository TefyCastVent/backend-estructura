import express from "express";
import * as bookController from '../controllers/bookController.js'
import createBookValidator from "../middlewares/createBookValidator.js";
import isAuth from "../middlewares/authValidator.js";

const router = express.Router()

// Aca van todas las rutas de libros
router.use(isAuth)
router.route('/books')
.get(bookController.getAllBooks)
.post(createBookValidator,bookController.createBook);

router.route('/books/:id')
.get(bookController.getBookById)
.put(bookController.updateBookById)
.delete(bookController.deleteBookById);

export default router;