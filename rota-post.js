import { criarNovoUsuario } from './crud-create.js';
import express from 'express';
const app = express();

app.use(express.json());

app.post('/api/usuarios', async (req, res)=>{
    const { nome, email } = req.body
    if (!nome || !email){
        return res.status(400).json({error: 'Nome e email são obrigatórios'})
    }

    try{
        const novoUsuario = await criarNovoUsuario(nome, email)
        res.status(201).json(novoUsuario)
    } catch (error){
        res.status(400).json({error: 'Erro ao criar usuário', details: error.message})
    }
})
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});