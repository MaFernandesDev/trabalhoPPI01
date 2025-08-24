import express from 'expresss';

const app = express();
const porta = 3000;
const host = '0.0.0.0';

app.listen(porta, host, () => {
    console.log(`Servidor em execução em http://${host}:${porta}`);
});