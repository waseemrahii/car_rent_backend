import express from 'express'
import {
   createCarType,
   getCarTypes,
   getCarTypeById,
   updateCarTypeById,
   deleteCarTypeById,
} from '../../controllers/car/carTypeController.js'
import { validateSchema } from '../../middlewares/validationMiddleware.js'
import carTypeValidationSchema from '../../validations/car/carTypeValidation.js'

const router = express.Router()

// Define routes for the /carTypes endpoint
router
   .route('/')
   .post(validateSchema(carTypeValidationSchema), createCarType) 
   .get(getCarTypes) 

// Define routes for the /types/:id endpoint
router
   .route('/:id')
   .get(getCarTypeById) // Handle GET requests to retrieve a specific car type by its ID
   .put(updateCarTypeById) // Handle PUT requests to update a car type by its ID
   .delete(deleteCarTypeById) // Handle DELETE requests to remove a car type by its ID

export default router
