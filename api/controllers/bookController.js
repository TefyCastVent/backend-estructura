import Book from "../models/Book.js";

const createBook = async (req, res) => {
    try {
      const newBook = await Book.create(req.body);
      return res.json({
        msg: 'Libro creado',
        book: newBook,
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Error al crear libro',
        error,
      });
    }
  };

const getAllBooks = async(req,res) => {
    try {
      const books = await Book.find();
      return res.json({
        msg: 'Libros encontrados',
        data: books
      })
    } catch (error) {
      return res.status(500).json({
        msg: 'Error al mostrar libros',
        error,
      })
    }
};
const getBookById = async(req,res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.json({
      msg: 'Libro encontrado',
      data: {book}
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al encontrar libro',
      error
    })
  }
};
const updateBookById = async(req,res) => {
  try {
    const { id } = req.params;
    const updateBook = await Book.findByIdAndUpdate(id , req.body, {new: true,});
    return res.json ({
      msg: 'Libro actualizado',
      data : {book: {updateBook}}
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar libro',
      error
    })
  }
};
const deleteBookById = async(req,res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    return res.json ({
      msg: 'Libro eliminado',
      
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al eliminar libro',
      error
    })
  }
};


export {getAllBooks, createBook, getBookById, updateBookById, deleteBookById}