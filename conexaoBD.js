import { Sequelize } from "sequelize";// importa o Sequelize do pacote sequelize que é usado para conectar ao banco de dados

const sequelize = new Sequelize(
    'postgres', // nome do banco
    'postgres',       // usuário
    '172471',         // senha
    {
        host: 'localhost', // host do banco de dados
        dialect: 'postgres',// tipo do banco de dados driver
        port: 5432,// porta do banco de dados
    }
)

// Função para testar a conexão com o banco de dados
async function connect() {
    try {
        await sequelize.authenticate();
    //sequelize.authenticate() tenta autenticar a conexão com o banco de dados
        console.log('Conecção estabelecida com sucesso.');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
}
connect()
exports.sequelize = sequelize; // exporta a instância do Sequelize para ser usada em outros arquivos