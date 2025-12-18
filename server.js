import express from 'express';
import usuariosRouter from './usuarios.routes.js';

const app = express()
app.use(express.json())

app.use('/api/usuarios', usuariosRouter)

app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000");
})