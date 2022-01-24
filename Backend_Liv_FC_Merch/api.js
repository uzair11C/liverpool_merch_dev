const dboperations = require('./dboperations')
var express = require('express');
var cors = require('cors');
var app = express();
// var Product = require('./tables')

app.use(express.urlencoded
        (
            { 
                extended: true 
            }
        )
    );
app.use(express.json());
app.use(cors());
// app.use('/api', router);

app.use((request,response,next) =>
{
    //console.log('middleware');
    next();
 })

app.get('/api/products',(request,response) =>
{
    dboperations.getProduct().then(result => 
        {
            response.json(result[0]);
        })
})

app.post('/api/products',(request,response) =>
{
    let Product = {...request.body}
    dboperations.addProduct(Product).then(
        result => 
        {
            response.status(201).json(result);
        }
    )
})

app.get('/api/admins',(request,response) =>
{
    dboperations.getAdmins().then(result => 
        {
            response.json(result[0]);
        })
})

app.get('/api/admins/:id',(request,response) =>
{
    dboperations.getAdminByID(request.params.id).then(result => 
        {
            response.json(result[0]);
        })
})

app.post('/api/admins',(request,response) =>
{
    let Admin = {...request.body}
    dboperations.createAdmin(Admin.Admin).then(
        result => 
        {
            response.status(201).json(result);
        }
    )
})

app.get('/api/customers',(request,response) =>
{
    dboperations.getCustomers().then(result => 
        {
            response.json(result[0]);
        })
})

app.get('/api/customers/:id',(request,response) =>
{
    dboperations.getCustomerByID(request.params.id).then(result => 
        {
            response.json(result[0]);
        })
})

app.post('/api/customers',(request,response) =>
{
    let Customer = {...request.body}
    dboperations.createCustomer(Customer.Customer).then(
        result => 
        {
            response.status(201).json(result);
        }
    )
})

app.get('/api/bills',(request,response) =>
{
    dboperations.getBills().then(result => 
        {
            response.json(result[0]);
        })
})

app.get('/api/bills/:id',(request,response) =>
{
    dboperations.getBillByCustID(request.params.id).then(result => 
        {
            response.json(result[0]);
        })
})

app.post('/api/bills',(request,response) =>
{
    let Bill = {...request.body}
    dboperations.createCustomer(Bill.Bill).then(
        result => 
        {
            response.status(201).json(result);
        }
    )
})

var port = process.env.PORT || 8000;
app.listen(port);
console.log('Order API is runnning at ' + port);