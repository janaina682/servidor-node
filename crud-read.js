import { user } from './sequelize.js'
//read
async function buscarTodosUsuarios() {
    try{
        const usuarios = await user.findAll();
        console.log('Usuários encotrados: ', usuarios);
        return usuarios;
    }catch(error){
        console.error('Erro ao buscar usuários:', error.message);
        return [];
    }
}
// Exemplo de como chamar a função:
buscarTodosUsuarios();