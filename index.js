const express = require('express');
const product = require('./data');
const app = express()
const port = 5000;

console.log(product)


app.get('/products', (req, res)=> {
console.log('get api is calling')
return res.status(200).json({
    status: 'success',
    data: product
})
})
app.post('/products', (req, res)=> {
    console.log('post api is  calling')
    return res.status(200).json({
        status: 'post success',
        data: product
    })
    })

    //Most Imp ****************
    // api by id with dynamic way
    app.get('/products/:id', (req, res)=> {
        const {id}= req.params;
      const item = product.find((x)=> x.id === parseInt(id))
        return res.status(200).json({
            status: 'successfully  got the data by id',
            data: item
        })
        })

app.listen(port,()=> {
   
})

// this the way to run in local server 