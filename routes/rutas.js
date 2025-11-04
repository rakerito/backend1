import {Router} from "express"
import {nuevoContacto, mostrarrContactos} from "../bd/contactosBD.js"

const router = Router()

var artistas = ["Van Gogh", "Bethoven", "Mozart", "Rembrandt","Vivaldi"]

router.get("/", (req, res)=>{
    res.render("home",{artistas})
})

router.get("/info/:c/:texto", async (req, res)=>{
    var c = req.body.c
    var texto = req.body.texto
    console.log("Nombre: " +nombre+"Edad: "+edad)
    const respuestaMongo = await nuevoContacto({nombre, edad})
    res.render("recibirDatos ",{c,texto})
})

router.get("/mostrarContactos", async(req, res)=>{
    const contactosBD = await mostrarContactos()
    res.render("mostrarContactos",{contactosBD})
})

export default router