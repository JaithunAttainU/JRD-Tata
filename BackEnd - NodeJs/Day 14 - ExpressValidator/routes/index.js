var express = require('express');
var router = express.Router();

const { check, body, query, param, validationResult } = require('express-validator')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/signup', [
  //All field validations
  body('emailId', "EMAIL ID NOT VALID")
    .isEmail()/*.withMessage("Email Id is not valid")*/
    .isLength({ min: 10 })/*.withMessage("Email Id should be min of 10 characters")*/,

  check('password')
    .isStrongPassword({ minLength: 6, minUppercase: 1, minNumbers: 2, minLowercase: 1, minSymbols: 1 })
    .withMessage("Password doe not satisfy the criteria")
], (req, res, next) => {

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

  //Save in DB
  res.send("Registred Successsfully")
})
module.exports = router;
