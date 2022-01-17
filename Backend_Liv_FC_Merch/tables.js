class Product
{
    constructor(ProductID,Name,ImageURL,Type,Price,Quantity)
    {
        this.ProductID = ProductID
        this.Name = Name
        this.ImageURL = ImageURL
        this.Type = Type
        this.Price = Price
        this.Quantity = Quantity
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
        this.CustomerID = CustomerID
    }
}

module.exports = 
                {
                    Product,
                    Admin,
                    Customer,
                    Bill
                }
