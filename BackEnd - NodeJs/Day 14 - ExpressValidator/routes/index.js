var express = require('express');
var router = express.Router();

const { check, body, query, param, validationResult, checkSchema } = require('express-validator')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

const allowedCountries = ['India', 'Srilanka']

//Schemas for Express Validator
const validationSchema = {
  emailId: {
    isEmail: {
      bail: true,
      errorMessage: 'Not a valid Email'
    },
    isLength: {
      options: { min: 10 },
      errorMessage: 'Email Id should be min of 10 characters'
    }
  },
  password: {
    isStrongPassword: {
      options: { minLength: 6, minUppercase: 1, minNumbers: 2, minLowercase: 1, minSymbols: 1 },
      errorMessage: 'Password doe not satisfy the criteria'
    }
  },
  country: {
    custom: {
      options: (value) => {
        if (allowedCountries.includes(value)) {
          return true
        }
        throw new Error('Country is not supported')
      },
    }
  },
  confirmPassword: {
    custom: {
      options: (value, { req }) => {
        if (value == req.body.password) {
          return true
        }
        throw new Error('Password and confirmPasword is not equal')
      }
    }
  }
}

router.post('/signup', check('emailId').trim(), [
  //All field validations
  body('emailId', "EMAIL ID NOT VALID")
    .isEmail()/*.withMessage("Email Id is not valid")*/
    .isLength({ min: 10 })/*.withMessage("Email Id should be min of 10 characters")*/,

  check('password')
    .isStrongPassword({ minLength: 6, minUppercase: 1, minNumbers: 2, minLowercase: 1, minSymbols: 1 })
    .withMessage("Password doe not satisfy the criteria")
], checkSchema(validationSchema), (req, res, next) => {

  //Validation Result
  const err = validationResult(req)

  if (!err.isEmpty()) {
    return res.status(401).json({
      error: err.array()
    })
  }
  next()
  // console.log(err)
}, (req, res) => {
  const { emailId, password } = req.body
  console.log(`${emailId}sanitized`)
  //Save in DB
  res.send("Registred Successsfully")
})
module.exports = router;
