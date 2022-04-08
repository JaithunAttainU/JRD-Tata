var express = require('express');
var router = express.Router();

const UserModel = require('../models/user')
/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    //Add to my db
    const users = await UserModel.find({})
    res.send(users)
  } catch (err) {
    res.status(500).json({
      errObj: err
    })
  }
});


router.post('/', async (req, res) => {
  try {
    //Add to my db
    const addResult = await UserModel.create(req.body)
    res.send(addResult)
  } catch (err) {
    res.status(500).json({
      errObj: err
    })
  }

})
module.exports = router;


const obj = {
  name: 'dfhjvshdjf',
  getName: function () {
    console.log(this.name)
  }
}

obj.getName()