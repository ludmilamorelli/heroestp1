const express = require('express');
const app = express();
const port = 3030;
const path = require('path');

app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','index.html')));
app.get('/TimBerners',(req,res) => res.sendFile(path.join(__dirname,'views','TimBerners.html')));
app.get('/JoaneClarke',(req,res) => res.sendFile(path.join(__dirname,'views','JoaneClarke.html')));
app.get('/CharlesBabbage',(req,res) => res.sendFile(path.join(__dirname,'views','CharlesBabbage.html')));
app.get('/MargaretHamilton',(req,res) => res.sendFile(path.join(__dirname,'views','MargaretHamilton.html')));
app.get('/GraceMurray',(req,res) => res.sendFile(path.join(__dirname,'views','GraceMurray.html')));
app.get('/AdaLovelace',(req,res) => res.sendFile(path.join(__dirname,'views','AdaLovelace.html')));
app.get('/AlanTuring',(req,res) => res.sendFile(path.join(__dirname,'views','AlanTuring.html')));
app.listen(port,() => console.log('Servidor corriendo en http://localhost:' + port))