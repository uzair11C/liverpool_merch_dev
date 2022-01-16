CREATE TABLE Customer
( 
  CustomerID          INT primary key IDENTITY(1,1) constraint ID NOT NULL,
  FirstName   VARCHAR(30),
  LastName    VARCHAR(30),
  Password	  varchar(50),
  Email		  varchar(50),
  Country     VARCHAR(10),
  City        VARCHAR(10),
  Street      INT,
  ContactNo   VARCHAR(10),
  UserType    VARCHAR(10)
)

CREATE TABLE Admin
( 
  AdminID          INT primary key IDENTITY(1,1) constraint ID NOT NULL,
  FirstName   VARCHAR(30),
  LastName    VARCHAR(30),
  Country     VARCHAR(10),
  City        VARCHAR(10),
  Street      INT,
  ContactNo   VARCHAR(10),
  UserType    VARCHAR(10)
)

drop table Customer
drop table Admin

create table Product 
(
	ProductID int Primary Key identity(1,1) constraint ProductID NOT NULL,
	Name varchar (50), 
	price int, 
	quantity int,
	Type varchar(20),
	CustID int foreign key (CustomerID) References Customer(CustomerID),
	AdminID int foreign key (AdminID) references Admin(AdminID),
)

create table SaleInfo
(
	purchaseNumber int primary key Constraint purchaseNumber NOT NULL,
	PurchasedItem varchar (50), 
	PurchaseAmount int,
	TotalPurchaseAmount int, 
	constraint fkID foreign key References Customer(ID) 
)

create table bill
(
	billNumber int primary key,
	billAmount int,
	id int,
	constraint FK_Bill_Cust FOREIGN KEY references Customer (ID)
);