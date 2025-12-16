import { buscarTodosUsuarios } from "./crud-read.js";
import express from "express";
const app = express();

app.get("/api/usuarios", async (req, res) => {
  try {
    const usuarios = await buscarTodosUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).send("Erro ao buscar usuários");
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
