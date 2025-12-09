/*const express = require('express'); impora o express usando require */
import express from 'express'; /* importa o express usando ESModules */
const app = express(); /* cria uma aplicação express */

/* Middleware de log de tempo */
timeLogger =(req, res, next) =>{
    console.log('hora:', Date.now())
    next();
}
/* Aplica o middleware a todas as rotas com app.use() */
app.use(timeLogger);

/* Middleware de autenticação */
checkAuth = (req, res, next) =>{
    const admin = req.query.admin ==='true';
    if(admin){
        next()
    }else{
        res.status(401).send('Não autorizado')
    }
}
/* Rota protegida que usa o middleware de autenticação */
app.get('/usuarios', checkAuth, (req, res)=>{
    res.send('Lista de usuários')
})