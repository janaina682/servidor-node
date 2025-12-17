import { AtualizarDadosUsuario } from "./crud-update.js";
import express from "express";
const app = express();

app.use(express.json());

app.put("/api/usuarios/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    
    if (!nome || !email) {
        return res.status(400).json({ error: "Nome e email são obrigatórios"})
    }
    try {
        const resultado = await AtualizarDadosUsuario(id, email, nome);
        res.status(200).json({ message: "Usuário atualizado com sucesso", linhaAfetadas: resultado });
    } catch (error) {
        res.status(400).json({ error: "Erro ao atualizar usuário"})
    }
})
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
