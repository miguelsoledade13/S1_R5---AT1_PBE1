import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

// Rota POST /mensagem
app.post('/mensagem', (req: Request, res: Response) => {
    try {
        const { nome, idade, time } = req.body;

        if (
            typeof nome !== 'string' ||
            nome.trim() === '' ||
            typeof idade !== 'number' ||
            !Number.isInteger(idade) ||
            idade < 0 ||
            typeof time !== 'string' ||
            time.trim() === ''
        ) {
            return res.status(400).json({
                erro: 'Informe nome, idade válida e time favorito.'
            });
        }

        const mensagem =
            `Olá, ${nome}! Você tem ${idade} anos e torce para o ${time}!`;

        return res.status(200).json({
            mensagem
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            erro: 'Erro interno do servidor.'
        });
    }
});

// Iniciar servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});