import mongoose from "mongoose"
import "dotenv/config"

async function connectDB(){
	//const respuestaMongo=await mongoose.connect("mongodb+srv://root:root@cluster0.hiejvjl.mongodb.net/?retryWrites=true&w=majority&appName=backend1")
	//mongoose.connect("mongodb://localhost:27017/backend1")
	//console.log("Conexión con Mongo Atlas")
	try{
        const respuestaMongo = await mongoose.connect(process.env.SECRET_MONGO)
        console.log("Conexión con Mongo DB Atlas")
    }catch(e){
        console.log("Error " + e)
    }
}

export default connectDB