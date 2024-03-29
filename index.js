const express = require('express');
const app = express();
const path = require('path');
const port = 3004;

app.use(express.static(path.join(__dirname, '')));

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});