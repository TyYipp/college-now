const express = require("express");
const router = new express.Router();


router.get("/",(req,res) => {
    try {
        return res.send("We're Live");
    } catch(error) {
        console.log(error);
    }
});


module.exports = router;
