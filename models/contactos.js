import mongoose from 'mongoose'
const contactoSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true, //Borrar los espacios al inicio y al final de la cadena
        unique:true //No se pueden repetir los nombres
    },
    edad:{
        type:Number,
        required:true,
        trim:true,
        unique:false
    }

})

export default mongoose.model('Contacto',contactoSchema)