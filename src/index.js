'use strict';

const express = require('express');
const axios = require('axios');
const {getUser} = require('./utils')

// Constants
const PORT = 8082;
const HOST = 'localhost';


// App
const app = express();
app.get('/:id', async (req, res) => {
  const {id} = req.params;
  try{
    
    const user = getUser(id);
    //const details = await axios.post('/details/:id', user)
    res.status(200).send(user);
  }
  catch(error){
    console.log("!!!!!",error.message);
    res.status(500).send({message:error.message});
  }
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);