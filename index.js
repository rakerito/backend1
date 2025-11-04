import express from 'express'
import rutas from "./routes/rutas.js"
import connectDB from "./bd/bd.js"


async function conexion(){
    await connectDB();
}

conexion()

const app = express()
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.use("/", rutas)

const PORT = process.env.PORT || 3000
app.listen(PORT, function(){
    console.log("https://localhost:" + PORT)
})
