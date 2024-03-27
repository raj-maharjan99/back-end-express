const express = require('express');
const product = require('./data');
const app = express()
const port = 5000;

console.log(product)


app.get('/', (req, res)=> {
console.log('api calling')
return res.status(200).send('Hello World!')
})

app.listen(port,()=> {
    console.log('server is running on localhost 5000')
})

// this the way to run in local server 