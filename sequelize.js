import { DataTypes, Sequelize } from "sequelize";
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

// Definição do modelo Usuario
const user = sequelize.define('Usuario',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
        unique: true,
    }
})
//conecta e sincroniza o modelo com o banco de dados
async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Conecção estabelecida com sucesso.');

        await user.sync();
    }catch(error){
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
}
connect()