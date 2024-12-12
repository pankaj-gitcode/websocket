// import express and create http sever
const express = require('express');
const {createServer} = require('node:http');

const PORT = 3000;

// create objects
const app = express();
const server = createServer(app);

// server listening
server.listen(PORT, ()=>console.log(`SERVER is LISTENIN on: ${PORT}`));

app.get('/', (req,res)=>{
    try{
        res.status(200).send('<h1>SERVER looks good...</h1>')
    }
    catch(err){
        res.status(500).json({
            pass: false,
            message: `ERROR: ${err.message}`
        })
    }
})