var config = require('./dbconfig');
const sql = require('mssql/msnodesqlv8');
const { Bill } = require('./tables');

async function getProduct() {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request().query("SELECT * from Product");
        return product.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function addProduct(Product)
{
    try
    {
        let pool = await sql.connect(config)
        let insertProduct = await pool.request()
                .query(
                        `INSERT INTO Product 
                         (ProductName, Price, Quantity, ImageURL, ProductType,AdminID)
                         VALUES
                         ('${Product.ProductName}',${Product.Price},${Product.Quantity},
                         '${Product.ImageURL}','${Product.ProductType}',${Product.AdminID})`
                      )

        return insertProduct.recordsets
    }
    catch(error)
    {
        console.log(error)
    }
}

async function getAdmins() {
    try {
        let pool = await sql.connect(config);
        let admin = await pool.request().query("SELECT * from Admin");
        return admin.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getAdminByID(id) {
    try {
        let pool = await sql.connect(config);
        let admin = await pool.request()
                              .query(`SELECT * from Admin
                                      WHERE Admin.AdminID = ${id}`);
        return admin.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function createAdmin(Admin)
{
    try
    {
        let pool = await sql.connect(config)
        let insertAdmin = await pool.request()
                .query(
                        `INSERT INTO Admin 
                        (FirstName,LastName,Email,Password,Country,City,County,Street,ContactNum,UserType)
                         VALUES
                         ('${Admin.FirstName}','${Admin.LastName}','${Admin.Email}',
                         '${Admin.Password}','${Admin.Country}','${Admin.City}',
                         ${Admin.Street},${Admin.ContactNum},'${Admin.UserType}')`
                      )

        return insertAdmin.recordsets
    }
    catch(error)
    {
        console.log(error)
    }
}

async function getCustomers() {
    try {
        let pool = await sql.connect(config);
        let customer = await pool.request().query("SELECT * from Customer");
        return customer.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getCustomerByID(id) {
    try {
        let pool = await sql.connect(config);
        let customer = await pool.request()
                              .query(`SELECT * from Customer
                                      WHERE Customer.CustomerID = ${id}`);
        return customer.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function createCustomer(Customer)
{
    try
    {
        let pool = await sql.connect(config)
        let insertCustomer = await pool.request()
                .query(
                        `INSERT INTO Customer 
                        (FirstName,LastName,Email,Password,Country,City,County,Street,ContactNum,UserType)
                         VALUES
                         ('${Customer.FirstName}','${Customer.LastName}','${Customer.Email}',
                         '${Customer.Password}','${Customer.Country}','${Customer.City}',
                         ${Customer.Street},${Customer.ContactNum},'${Customer.UserType}')`
                      )

        return insertCustomer.recordsets
    }
    catch(error)
    {
        console.log(error)
    }
}

async function getBills() {
    try
    {
        let pool = await sql.connect(config);
        let bill = await pool.request().query("SELECT * from Bill");
        return bill.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getBillByCustID(cid) {
    try
    {
        let pool = await sql.connect(config);
        let bill = await pool.request()
                             .query(`SELECT * from Customer
                                     WHERE Bill.CustomerID = ${id}`);
        return bill.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function createBill(Bill)
{
    try
    {
        let pool = await sql.connect(config)
        let insertBill = await pool.request()
                .query(
                        `INSERT INTO Bill 
                        (BillNumber,BillAmount,CustomerID)
                         VALUES
                         (${Bill.BillNumber},${Bill.BillAmount},${Bill.CustomerID})`
                      )

        return insertBill.recordsets
    }
    catch(error)
    {
        console.log(error)
    }
}

module.exports = 
{
    getProduct      : getProduct,
    addProduct      : addProduct,

    getAdmins       : getAdmins,
    getAdminByID    : getAdminByID,
    createAdmin     : createAdmin,

    getCustomers    : getCustomers,
    getCustomerByID : getCustomerByID,
    createCustomer  : createCustomer,

    getBills        : getBills,
    getBillByCustID : getBillByCustID,
    createBill      : createBill
}