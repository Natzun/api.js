const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./config/routes');


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors()); // aqui é onde colocaríamos o domínio pra ser utilizado, mas vamos fazer localhost
app.use(routes);



app.listen(3000, () => { // => pra criar a função dentro do parâmetro
    console.log('Express strated at http://localhost:3000');
});