import { DeletarUsuario } from "./crud-delete.js";
import express from "express";
const app = express();

app.use(express.json());

app.delete("/api/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "ID do usuário é obrigatório" });
  }
  try {
    const resultado = await DeletarUsuario(id);
    res
      .status(200)
      .json({
        message: `Usuário com id ${id} deletado com sucesso. ${resultado}`,
      });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erro ao deletar usuário", details: error.message });
  }
});
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
