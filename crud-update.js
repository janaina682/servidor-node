import { user } from "./sequelize.js";
//update
async function AtualizarDadosUsuario(id, novoEmail, novoNome) {
  try {
    const resultado = await user.update(
      { nome: novoNome, email: novoEmail },
      { where: { id: id } }
    );
    if (resultado[0] > 0) {
      console.log(
        `Usuário com id ${id} atualizado com sucesso para o nome: ${novoNome}`
      );
    } else {
      console.log(`Nenhum usuário encontrado com id ${id}.`);
    }
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error.message);
  }
}
// Exemplo de como chamar a função:
//AtualizarNomeUsuario(1, "geraldo@email.com","Geraldo ");
//AtualizarNomeUsuario(2, "higor@email.com", "Higor");
export { AtualizarDadosUsuario };