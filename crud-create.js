import { user } from './sequelize.js'
//create
async function criarNovoUsuario(nome, email) {
    console.log(`Tentando criar usuário: ${nome}`);
    try {
        // AQUI: Chame o método user.create() com os dados
        const novoUsuario = await user.create({nome, email})
        
        console.log('Usuário criado com sucesso:', novoUsuario);
        return novoUsuario;
    } catch (error) {
        console.error('Erro ao criar usuário:', error.message);
    }
}

// Exemplo de como chamar a função:
//criarNovoUsuario('Gustavo Testando', 'gustavo.testando@exemplo.com');

