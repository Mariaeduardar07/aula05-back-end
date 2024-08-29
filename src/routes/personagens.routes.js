import { Router } from "express"

const personagens = Router()

const personagensRoutes = [
    {
        id: 100,
        nome: "Totoro",
        studio: "Ghibli",
        vivo: true
    },
    {
        id: 101,
        nome: "Rapunzel",
        studio: "Disney",
        vivo: true
    },
    {
        id: 102,
        nome: "Jessie",
        studio: "Pixar",
        vivo: true
    }
]

app.get("/personagens", (req, res) => {
    return res.status(200).send(personagens)
})
