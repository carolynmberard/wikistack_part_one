const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.get('/', (req,res,next) =>{
    res.send('Hello World!');
})

const PORT = 1337
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})

//const postgresUrl = 'postgres://localhost/wnews'