
import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

// Rota POST /soma
app.post('/soma', (req: Request, res: Response) => {
    try {
        const { numero1, numero2, numero3 } = req.body;

        // Verificar se os três campos foram informados
        if (
            numero1 === undefined ||
            numero2 === undefined ||
            numero3 === undefined
        ) {
            return res.status(400).json({
                erro: 'Informe os três números.'
            });
        }

        // Verificar se todos os valores são numéricos
        if (
            typeof numero1 !== 'number' || !Number.isFinite(numero1) ||
            typeof numero2 !== 'number' || !Number.isFinite(numero2) ||
            typeof numero3 !== 'number' || !Number.isFinite(numero3)
        ) {
            return res.status(400).json({
                erro: 'Todos os campos devem possuir valores numéricos.'
            });
        }

        // Realizar a soma
        const resultado = numero1 + numero2 + numero3;

        // Retornar o resultado
        return res.status(200).json({
            resultado: resultado
        });

    } catch (error) {
        console.error('Erro:', error);

        return res.status(500).json({
            erro: 'Erro interno do servidor.'
        });
    }
});

// Iniciar servidor
const PORT = 3012;  

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
