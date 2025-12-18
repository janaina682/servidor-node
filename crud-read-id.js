import { user } from './sequelize.js'
//read por id

async function buscarUsarioPorId(id) {
    try {
        const usuario = await user.findByPk(id);
        console.log('Usuário encontrado: ', usuario);
        return usuario;
    } catch (error) {
        console.error("Erro ao buscar usuário por ID:", error);
        return []
    }
}
//buscarUsarioPorId();
export { buscarUsarioPorId };