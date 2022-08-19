import express from 'express';
import {login, register} from '../controllers/authController.js'
import createUserValidator from '../middlewares/createUserValidator.js';

const router = express.Router();

router.post('/register',createUserValidator, register)
router.post('/login',login)

export default router;