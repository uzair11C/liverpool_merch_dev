class Product
{
    constructor(ProductID,ProductName,Price,Quantity,ImageURL,ProductType,AdminID)
    {
        this.ProductID = ProductID
        this.ProductName = ProductName
        this.Price = Price
        this.Quantity = Quantity
        this.ImageURL = ImageURL
        this.ProductType = ProductType
        this.AdminID = AdminID
    }
}

class Admin
{
    constructor(AdminID,FirstName,LastName,Email,Password,Country,City,County,Street,ContactNum,UserType)
    {
        this.AdminID = AdminID
        this.FirstName = FirstName
        this.LastName = LastName
        this.Email = Email
        this.Password = Password
        this.Country = Country
        this.City = City
        this.County = County
        this.Street = Street
        this.ContactNum = ContactNum
        this.UserType = UserType
    }
}

class Customer
{
    constructor(CustomerID,FirstName,LastName,Email,Password,Country,City,County,Street,ContactNum,UserType)
    {
        this.CustomerID = CustomerID
        this.FirstName = FirstName
        this.LastName = LastName
        this.Email = Email
        this.Password = Password
        this.Country = Country
        this.City = City
        this.County = County
        this.Street = Street
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
        this.CustomerID = CustomerID
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
        this.CustomerID = this.CustomerID
    }
}

class TotalSales
{
    constructor(SaleQuantity,AdminID,CustomerID)
    {
        this.SaleQuantity = SaleQuantity
        this.AdminID = AdminID
        this.CustomerID = CustomerID
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
