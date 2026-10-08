import express from "express";
import path from "path";
import multer from "multer";    

const app = express();
const storage = multer.diskStorage({
    destination:function (req,file,cb){
return cb(null, "../uploadFiles")
    },
    filename: function (req, file, cb) {
   return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage})
app.set("view engine", "ejs");
app.set("views", path.resolve("../view"));

app.use(express.urlencoded({extended:false}))

app.get("/", (req, resp) => {
  return resp.render("uploadFile");
});


app.post("/uploadFile", upload.single("profileImage"), (req, resp)=> {
    console.log(req.body)
    console.log(req.file)
    return resp.redirect("/")
})

app.listen(2000);
