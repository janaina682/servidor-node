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
/* 
criarNovoUsuario('Artur Nobre', 'artur.nobre@exemplo.com');
criarNovoUsuario('Bernardo Silva', 'bernardo.silva@exemplo.com');
criarNovoUsuario('Carol Guedes', 'carol.guedes@exemplo.com');
criarNovoUsuario('Dionisio Borges', 'dionisio.borges@exemplo.com');
criarNovoUsuario('Francesco Testando', 'francesco.testando@exemplo.com');
*/