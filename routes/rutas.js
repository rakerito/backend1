import {Router} from "express"

const router = Router()

var artistas = ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt","Vivaldi"]

router.get("/", (req, res)=>{
    res.render("home",{artistas})
})

router.get("/info/:c/:texto", (req, res)=>{
    var c = req.params.c
    var texto = req.params.texto
    console.log(c)
    res.render("info",{c,texto})
})

router.get("/contacto", (req, res)=>{
    res.render("contactanos")
})

export default router