import { Router } from "express";

const personagensRoutes = Router();

let personagens = [
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

personagensRoutes.get("/", (req, res) => {
    return res.status(200).send(personagens)
});
//Rota para criar uma nova emoção
personagensRoutes.post("/", (req, res) => {
    const { nome, studio, vivo } = req.body
    const novoPersonagem = {
        id: personagens.length + 1,
        nome: nome, 
        studio: studio,
        vivo: vivo
    }
    personagens.push(novoPersonagem)
    return res.status(201).send(novoPersonagem)
});

personagensRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
    
    const personagem = personagens.find((person) => person.id == id);

        if(!person) {
            return res.status(404).send({message: "Personagem Não Encontado"});
        }

        personagens = personagens.filter((person) => person.id != id);
        
        return res.status(200).send({
            message: "Personagem Deletado", personagem
           });
})

export default personagensRoutes