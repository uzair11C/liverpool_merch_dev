const dboperations = require('./dboperations')
var express = require('express');
var cors = require('cors');
var app = express();
var router = express.Router();
var Product = require('./tables')

app.use(express.urlencoded
        (
            { 
                extended: true 
            }
        )
    );
app.use(express.json());
app.use(cors());
app.use('/api', router);

app.use((request,response,next) =>
{
    //console.log('middleware');
    next();
 })

app.get('/products',(request,response) =>
{
    dboperations.getProduct().then(result => 
        {
            response.json(result[0]);
        })
})

app.post('/products',(request,response) =>
{
    let product = {...request.body}
    dboperations.addProduct(Product.Product).then(
        result => 
        {
            response.status(201).json(result);
        }
    )
})

var port = process.env.PORT || 8000;
app.listen(port);
console.log('Order API is runnning at ' + port);