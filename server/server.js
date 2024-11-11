const express =  require("express")
const cors =  require("cors")
const dotenv =  require("dotenv")
const colors =  require("colors")
const morgan =  require("morgan")

// dot env
dotenv.config()

//Rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.get("",(req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcom success"
    })
})

//PORT
const PORT = process.env.PORT || 8080

//Listen
app.listen(PORT, ()=> {
    console.log("Server running");
    
})