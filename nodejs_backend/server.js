import express from "express";
import dotenv from "dotenv";
import conectarAoBanco from "./src/config/dbConfig.js";
import routes from "./src/routes/postsRoutes.js";

dotenv.config(); // Configurar variáveis do .env

const app = express();
app.use(express.static("uploads"))
const PORT = 3000;

(async () => {
    try {
        const banco = await conectarAoBanco(process.env.STRING_CONEXAO);
        console.log("Banco conectado:", banco.databaseName);

        routes(app);

        app.listen(PORT, () => {
            console.log(`Servidor escutando na porta ${PORT}...`);
        });
    } catch (erro) {
        console.error("Erro ao inicializar o servidor:", erro);
    }
})();
