import Joi from 'joi'

const cardValidationSchema = Joi.object({
   ownerId: Joi.number().integer().required().messages({
      'any.required': 'Please provide User ID.',
      'number.base': 'User ID must be a number.',
      'number.integer': 'User ID must be an integer.',
   }),

   ownerType: Joi.string()
      .valid('user', 'customer')
      .default('customer')
      .required()
      .messages({
         'any.required': 'Owner type is required.',
         'string.base': 'Owner type must be a string.',
         'string.valid': 'Owner type must be either "user" or "customer".',
      }),
   cardNumber: Joi.string().max(20).required().messages({
      'any.required': 'Please provide Card.',
      'string.base': 'Card number must be a string.',
      'string.length': 'Card number must be exactly 20 characters long.',
      'string.empty': 'Card number cannot be empty.',
   }),
   cardHolderName: Joi.string()
      .max(50)
      .required()
      .messages({
         'any.required': 'Please provide Card Holder Name.',
         'string.base': 'Card holder name must be a string.',
         'string.max': 'Card holder name cannot be longer than 50 characters.',
         'string.empty': 'Card holder name cannot be empty.',
      })
      .trim(),

   expiryDate: Joi.date().required().messages({
      'any.required': 'Please provide Expiry Date.',
      'date.base': 'Expiry date must be a valid date.',
   }),

   cvv: Joi.string().max(6).required().messages({
      'any.required': 'Please provide CVV.',
      'string.base': 'CVV must be a string.',
      'string.length': 'CVV must be exactly 6 characters long.',
      'string.empty': 'CVV cannot be empty.',
   }),
   billingAddress: Joi.string()
      .max(255)
      .required()
      .messages({
         'any.required': 'Please provide Address.',
         'string.base': 'Billing address must be a string.',
         'string.max': 'Billing address cannot be longer than 255 characters.',
         'string.empty': 'Billing address cannot be empty.',
      })
      .trim(),
})

export default cardValidationSchema
