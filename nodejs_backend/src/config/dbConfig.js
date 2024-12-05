import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config(); // Carregar variáveis do .env

export default async function conectarAoBanco() {
    const stringConexao = process.env.STRING_CONEXAO;

    let mongoClient;

    try {
        console.log('String de conexão:', stringConexao); // Para validar a string
        mongoClient = new MongoClient(stringConexao, { 
            
            ssl: true // SSL/TLS habilitado
           
        });
        console.log('Conectando ao cluster do banco de dados...');
        await mongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');
        return mongoClient;
    } catch (erro) {
        console.error('Falha na conexão com o banco!', erro);
        process.exit(1); // Sai com erro
    }
}
