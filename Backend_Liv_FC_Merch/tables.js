class Product
{
    constructor(ProductID,ProductName,ImageURL,ProductType,Price,Quantity,CustomerID,AdminID)
    {
        this.ProductID = ProductID
        this.ProductName = ProductName
        this.Price = Price
        this.Quantity = Quantity
        this.ImageURL = ImageURL
        this.ProductType = ProductType
        this.CustomerID = CustomerID
        this.AdminID = AdminID
    }
}

class Admin
{
    constructor(ID,FirstName,LastName,Email,Password,Country,City,County,ContactNum,UserType)
    {
        this.ID = ID
        this.FirstName = FirstName
        this.LastName = LastName
        this.Email = Email
        this.Password = Password
        this.Country = Country
        this.City = City
        this.County = County
        this.ContactNum = ContactNum
        this.UserType = UserType
    }
}

class Customer
{
    constructor(ID,FirstName,LastName,Email,Password,Country,City,County,ContactNum,UserType)
    {
        this.ID = ID
        this.FirstName = FirstName
        this.LastName = LastName
        this.Email = Email
        this.Password = Password
        this.Country = Country
        this.City = City
        this.County = County
        this.ContactNum = ContactNum
        this.UserType = UserType
    }
}

class Bill
{
    constructor(BillId,BillNumber,BillAmount,CustomerID)
    {
        this.BillId = BillId
        this.BillNumber = BillNumber
        this.BillAmount = BillAmount
        Customer.CustomerID = CustomerID
    }
}

class SaleInfo
{
    constructor(PurchaseNumber,PurchasedItem,PurchaseAmount,TotalPurchaseAmount,CustomerID)
    {
        this.PurchaseNumber = PurchaseNumber
        this.PurchasedItem = PurchasedItem
        this.PurchaseAmount = PurchaseAmount
        this.TotalPurchaseAmount = TotalPurchaseAmount
        Customer.CustomerID = Customer.CustomerID
    }
}

class TotalSales
{
    constructor(SaleQuantity,AdminID,CustomerID)
    {
        
    }
}

module.exports = 
                {
                    Product,
                    Admin,
                    Customer,
                    Bill,
                    SaleInfo,
                    TotalSales
                }
