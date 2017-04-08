var express = require('express');
var router = express.Router();


//注册的接口
router.post("/register",function (req,res) {
  console.log(req.body)
});
module.exports = router;
