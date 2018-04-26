var express     = require("express"),
    User        = require("../models/user"),
    passport    = require("passport");


var router = express.Router();
 
router.get("/", (req, res)=>{
    if(req.user){
        User.findById(req.user._id).then((rUser)=>{
            return res.render("index");
        }).catch((e)=>{
            console.log(e);
            return res.render("index");
        });
    }else{
        res.render("index");
    }
});


module.exports = router;