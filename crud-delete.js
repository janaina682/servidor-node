import { user } from './sequelize.js'
//delete

async function DeletarUsuario(id) {
    console.log("Tentando deletar usuário: ", id);
    try {
        const resultado = await user.destroy({ where: { id : id}})
        if (resultado === 1) {
            console.log(`Usuário com id ${id} deletado com sucesso.`)
        } else {
            console.log(`Nenhum usuário encontrado com id ${id}.`)
        }
    } catch(error) {
        console.error("Erro ao deletar usuário: ", error.message)
    }
}
// Exemplo de como chamar a função:
DeletarUsuario(3);
