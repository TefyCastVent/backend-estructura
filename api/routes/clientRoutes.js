import express from "express";
import * as clientController from "../controllers/clientController.js"

const router = express.Router()

router.route('/clients').get(clientController.getAllClients).post(clientController.createClient);

router.route('/books/:id')
.get(clientController.getClientById)
.put(clientController.updateClientById)
.delete(clientController.deleteClientById);

export default router