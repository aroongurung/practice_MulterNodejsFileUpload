const express = require("express");
const router = express.Router();
const multer = require("multer");

//Multer logic starts
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "uploadgallery")
    },
    filename : (req, file, cb) => {
        console.log(file)
        const newFileName = Date.now()+"-"+file.originalname
        cb(null, newFileName)
    }
});
const upload = multer({storage:storage});
//multer logic ends

//get home route
router.get(`/`, (req, res) => {
    res.end("This is Home Page");
});
//get testing route
router.get(`/file`, (req, res) => {
    res.end("This is File Content Page");
});
//Upload Home Page
router.get(`/upload`, (req, res) => {
    res.render("index");
});
//Upload POST route
router.post(`/upload`,upload.single("hero"), (req, res) => {
    res.redirect(`/`);
});


module.exports = router;