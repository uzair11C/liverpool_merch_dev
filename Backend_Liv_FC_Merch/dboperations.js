var config = require('./dbconfig');
const sql = require('mssql/msnodesqlv8');

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
                         (ProductName, Price, Quantity, ImageURL, ProductType)
                         VALUES
                         ('${Product.ProductName}',${Product.Price},${Product.Quantity},
                         '${Product.ImageURL}','${Product.ProductType}')`
                      )

        return insertProduct.recordsets
    }
    catch(error)
    {
        console.log(error)
    }
}

module.exports = 
{
    getProduct : getProduct,
    addProduct : addProduct
}