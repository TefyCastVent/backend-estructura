import jwt from 'jwt-simple'
import configDB from '../config/index.js'
import User from '../models/User.js'
const isAuth = async(req, res, next) => {
   try {
    const token = req.headers.authorization;
    if(!token) {
        return res.status(400).json({
            msg: " Cabecera Authorization"
        })
    }
    const payload = jwt.decode(token, configDB.jwt.secret)
    const user = await User.findById(payload.userId)
    if(!user){
        return res.status(401).json({
            msg: 'Token invalido',
        })
    }
    next();
   } catch (error) {
        return res.status(401).json({
            msg: 'Token invalido'
        })
   } 
}

export default isAuth;