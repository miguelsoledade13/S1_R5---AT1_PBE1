
import express, { Request, Response } from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';

const app = express();

app.use(express.json());

// Caminho do arquivo JSON
const caminhoArquivo = path.join(
    process.cwd(),
    'dados',
    'usuarios.json'
);

// Rota POST /login
app.post('/login', async (req: Request, res: Response) => {
    try {
        const { usuario, senha } = req.body;

        // Verificar se os campos foram informados
        if (
            typeof usuario !== 'string' ||
            usuario.trim() === '' ||
            typeof senha !== 'string' ||
            senha.trim() === ''
        ) {
            return res.status(400).json({
                erro: 'Informe usuário e senha.'
            });
        }

        // Ler os dados do arquivo JSON
        const conteudo = await fs.readFile(caminhoArquivo, 'utf-8');

        const dados = JSON.parse(conteudo);

        // Verificar usuário e senha
        if (
            usuario !== dados.usuario ||
            senha !== dados.senha
        ) {
            return res.status(401).json({
                erro: 'Usuário ou senha incorretos.',
                usuario: usuario
            });
        }

        // Retornar sucesso
        return res.status(200).json({
            mensagem: 'Login realizado com sucesso!',
            usuario: usuario
        });

    } catch (error) {
        console.error('Erro no login:', error);

        return res.status(500).json({
            erro: 'Erro interno ao realizar login.'
        });
    }
});

// Iniciar servidor
const PORT = 3013;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
