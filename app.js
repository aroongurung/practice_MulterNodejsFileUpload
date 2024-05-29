const express = require("express");
const app = express();
const fileuploadRouter = require("./routes/fileupload");
const multer = require("multer");
const ejs = require("ejs");



app.set("view engine", "ejs");
app.use(fileuploadRouter);

PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} ...`);
});