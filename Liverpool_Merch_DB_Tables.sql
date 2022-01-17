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
  Street      INT,
  ContactNo   VARCHAR(10),
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
  Street      INT,
  ContactNo   VARCHAR(10),
  UserType    VARCHAR(10)
)

create table Product 
(
	ProductID		int Primary Key identity(1,1) constraint ProductID NOT NULL,
	ProductName		varchar (50), 
	Price			int, 
	Quantity		int,
	ImageURL		nvarchar(2083),
	ProductType		varchar(20),
	CustomerID		int foreign key (CustomerID) References Customer(CustomerID),
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





--Drop Table Queries

DROP TABLE bill
DROP TABLE Product
DROP TABLE SaleInfo
DROP TABLE TotalSales
DROP TABLE Admin
DROP TABLE Customer