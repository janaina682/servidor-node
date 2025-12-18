import { Router } from "express";
import { criarNovoUsuario } from "./crud-create.js";
import { buscarTodosUsuarios } from "./crud-read.js";
import { buscarUsarioPorId } from "./crud-read-id.js";
import { AtualizarDadosUsuario } from "./crud-update.js";
import { DeletarUsuario } from "./crud-delete.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const usuarios = await buscarTodosUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).send("Erro ao buscar usuários");
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await buscarUsarioPorId(id);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).send("Usuário não encontrado");
    }
  } catch (error) {
    res.status(500).send("Erro ao buscar usuário por ID");
  }
});
router.post("/", async (req, res) => {
  const { nome, email } = req.body;
  if (!nome || !email) {
    return res.status(400).json({ error: "Nome e email são obrigatórios" });
  }

  try {
    const novoUsuario = await criarNovoUsuario(nome, email);
    res.status(201).json(novoUsuario);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erro ao criar usuário", details: error.message });
  }
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  if (!id) {
    return res.status(400).json({ error: "ID do usuário é obrigatório" });
  }

  try {
    const usuarioAtualizado = await AtualizarDadosUsuario(id, nome, email);
    res.status(200).json(usuarioAtualizado);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erro ao atualizar usuário", details: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "ID do usuário é obrigatório" });
  }
  try {
    const resultado = await DeletarUsuario(id);
    res.status(200).json({
      message: `Usuário com id ${id} deletado com sucesso. ${resultado}`,
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erro ao deletar usuário", details: error.message });
  }
});

export default router;
