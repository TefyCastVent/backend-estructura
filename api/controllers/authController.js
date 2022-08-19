import bcrypt from 'bcrypt'
import User from '../models/User.js';
import jwt from 'jwt-simple'
import configDB from '../config/index.js'

const register = async(req, res) => {
    try {
        const encryptedPass = await bcrypt.hash(req.body.password, 4);
        req.body.password = encryptedPass;
        const user = await User.create(req.body);
        // user.password = undefined;
        return res.json({
            msg: 'Usuario creado',
            data: { user}
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Ocurrio un error al registrar usuario',
            error
        })
    }
}
const login = async (req, res) => {
    /**
     * 1.- Validar que venga pass y correo ✅
     * 2.- Buscar un usuario con ese correo ✅
     * 3.- Comprar contraseñas con bcrypt ✅
     * 4.- Si todo coincide crear token y regresarlo
     * 5.- si no coincide regresar un 401 ✅
     */
    try {
      const user = await User.findOne({
        email: req.body.email,
      });
  
      if (!user) {
        return res.status(404).json({
          msg: 'Usuario no encontrado',
        });
      }
  
      const passCorrect = await bcrypt.compare(req.body.password, user.password);
      if (!passCorrect) {
        return res.status(401).json({
          msg: 'Credenciales inválidas',
        });
      }
      //TODO: crear token y regresarlo
      const payload = {
        userId : user.id
      }
      const token = jwt.encode(payload, configDB.jwt.secret)
      return res.json({
        msg: "token",
        data:{ token}
      })
    } catch (error) {
      return res.status(500).json({
        msg: 'Error al hacer login',
        error
      });
    }
  };



export {login, register}