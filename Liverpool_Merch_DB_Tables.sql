--Create Table Queries

CREATE TABLE Customer
( 
  CustomerID  INT primary key IDENTITY(1,1) constraint ID NOT NULL,
  FirstName   VARCHAR(30),
  LastName    VARCHAR(30),
  Email		  varchar(30),
  Password	  varchar(15),
  Country     VARCHAR(10),
  City        VARCHAR(10),
  County	  VARCHAR(10),
  Street      INT,
  ContactNum   VARCHAR(10),
  UserType    VARCHAR(10)
)

CREATE TABLE Admin
( 
  AdminID     INT primary key IDENTITY(1,1) constraint ID NOT NULL,
  FirstName   VARCHAR(30),
  LastName    VARCHAR(30),
  Email		  varchar(30),
  Password	  varchar(15),
  Country     VARCHAR(10),
  City        VARCHAR(10),
  County	  VARCHAR(10),
  Street      INT,
  ContactNum   VARCHAR(10),
  UserType    VARCHAR(10)
)

create table Product 
(
	ProductID		int Primary Key identity(1,1) constraint ProductID NOT NULL,
	ProductName		varchar (50), 
	Price			int, 
	Quantity		int,
	ImageURL		varchar(2083),
	ProductType		varchar(20),
	AdminID			int foreign key (AdminID) references Admin(AdminID)
)

create table SaleInfo
(
	PurchaseNumber			int primary key Constraint purchaseNumber NOT NULL,
	PurchasedItem			varchar (50), 
	PurchaseAmount			int,
	TotalPurchaseAmount		int, 
	CustomerID				int foreign key (CustomerID) References Customer(CustomerID)
)

CREATE TABLE TotalSales
(
	SaleQuantity	int,
	AdminID			int foreign key (AdminID) references Admin(AdminID),
	CustomerID		int foreign key (CustomerID) References Customer(CustomerID),
	CONSTRAINT PK PRIMARY KEY(AdminID,CustomerID)
)

create table Bill
(
	BillId		int primary key IDENTITY(1,1) Constraint BillId NOT NULL,
	BillNumber	int,
	BillAmount	int,
	CustomerID	int foreign key (CustomerID) References Customer(CustomerID)
);

--Display Queries

select * from Admin
select * from Customer
select * from Product
select * from Bill
select * from SaleInfo
select * from TotalSales

--insert queries
insert into Customer 
(FirstName,LastName,Email,Password,Country,City,County,Street,ContactNum,UserType)
Values 
		('Dean','Norris','deannorr123@gmail.com','1234','England','London','Bristol',34,12345,'Customer')

insert into Admin 
(FirstName,LastName,Email,Password,Country,City,County,Street,ContactNum,UserType)
Values 
		('Norris','Dean','norrdean321@gmail.com','4321','England','London','Chelsea',12,54321,'Admin')

insert into Admin 
(FirstName,LastName,Email,Password,Country,City,County,Street,ContactNum,UserType)
Values 
		('Jurgen','Klopp','jklopp23@gmail.com','liv32','England','London','Liverpool',17,67890,'Admin')


INSERT INTO Product 
(ProductName, Price, Quantity, ImageURL, ProductType,AdminID)
VALUES
 ('Milner Kit',30,15,
 'https://footballtracksuits.com/wp-content/uploads/product_images/liverpool-home-vapor-match-shirt-2021-22-with-milner-7-printing-1-600x600.jpg',
 'Kit',
(SELECT Customer.CustomerID from Customer),(SELECT Admin.AdminID from Admin))



 --Triggers

CREATE TRIGGER DeleteProduct 
ON Product 
FOR DELETE 
AS
BEGIN
	DECLARE @Quantity INT 
	SELECT @Quantity = (SELECT Quantity from Product)
	DELETE FROM Product 
	WHERE @Quantity = 0
END

 /*
 CREATE TRIGGER addAdminID
 ON Admin
 AFTER INSERT
 AS
 BEGIN
	Insert into Product (AdminID)
	(SELECT (AdminID) FROM dbo.Admin)
 END
 */





--Drop Table Queries

DROP TABLE Bill
DROP TABLE Product
DROP TABLE SaleInfo
DROP TABLE TotalSales
DROP TABLE Admin
DROP TABLE Customer