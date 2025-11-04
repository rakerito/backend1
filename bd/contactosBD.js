import Contacto from "../models/contactos.js"
export async function nuevoContacto({nombre, edad}){
    const contacto = new Contacto({nombre, edad})
    const  respuestaMongo = await contacto.save()
    return respuestaMongo
}
export async function mostrarrContactos(){
    const contactosBD = await Contacto.find()
}