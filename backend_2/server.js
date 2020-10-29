const express = require('express');
const app = express();
const cors = require('cors')
const port = 3003

app.use(cors())


app.use(express.json())

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}..`)
});


app.get('/verificanome/:nome', (req, res) => {
    let retorno = false
    var nomes = ['alex', 'sandro', 'frick', 'schmidt']
    
    for (let i in nomes){
        if(req.params.nome === nomes[i]){
            retorno = true
        }
    }
    
    res.status(200).send(retorno)
});