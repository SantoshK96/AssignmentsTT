CREATE TABLE [dbo].[tblEmp](
    [ntEmpID] [bigint] IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [vcName] [varchar](100) NULL,
    [vcMobieNumer] [varchar](15) NULL,
    [vcSkills] [varchar](max) NULL,
    [moSalary] [money] DEFAULT(0) NOT NULL,
    [ntLevel] [bit] DEFAULT(0) NOT NULL
);

INSERT [dbo].[tblEmp] VALUES
    ('Scott','123-456-3456','CF,HTML,JavaScript',50,0),
    ('Greg',NULL,'HTML5,JavaScript,Jquery',80,0),
    ('David','123-456-3458','Sql,JavaScript',30,1),
    ('Alan','123-456-3459','C#,VB,XQuery',60,1),
    ('Jhon',NULL,'XML,HTML',80,1),
    ('Alan','123-456-3461','Sql,Oracle,DB2',70,1);

--1. 
SELECT COUNT(ntEmpID) AS NumberOfEmployees,MIN(moSalary) AS MinSalary,COUNT(DISTINCT ntLevel) AS DistinctNtLevel from tblEmp;

--2.
 SELECT ntEmpID, E.vcName,E.vcMobieNumer
    FROM tblEmp E;
--3.
SELECT ntEmpID FROM tblEmp WHERE((vcMobieNumer IS NULL AND ntLevel = 1) OR(vcMobieNumer IS NOT NULL AND ntLevel = 0) ) ;

--4.
SELECT * FROM tblEmp
ORDER BY CASE
WHEN vcSkills LIKE('%JavaScript%') THEN [ntEmpID] 
END DESC;


--5.
	--a.
SELECT TOP(1) * FROM tblEmp ;
-- selects first record from tblEmp.
	--b.
SELECT TOP(SELECT 3/2) * FROM tblEmp ;
-- selects first record from tblEmp as 'SELECT 3/2' returns 1 .
	--c.
SELECT TOP(1) PERCENT * FROM tblEmp;
-- selects first record from tblEmp as 1/100 = 0.01 rounded to one.
	--d.
SELECT TOP(1) WITH TIES * FROM tblEmp ORDER BY vcName;
-- selects first record from tblEmp which all have common valued column .

--6.All column names in SELECT list must appear in GROUP BY clause unless name is used only in an aggregate function
	--possible solution 1
SELECT [vcName],[vcMobieNumer] FROM [dbo].[tblEmp] GROUP BY [vcName],[vcMobieNumer];
	--possible solution 2
SELECT [vcName],COUNT([vcMobieNumer]) AS NoOfMobileNumbers FROM [dbo].[tblEmp] GROUP BY [vcName];

--7.
SELECT [ntEmpID],[ntLevel] FROM tblEmp WHERE [moSalary]>( SELECT AVG([moSalary]) FROM tblEmp);

--8.
SELECT COUNT(BusinessEntityID) FROM Person.Person WHERE Suffix IS NOT NULL;

--9.
SELECT P.FirstName+' '+ISNULL(P.MiddleName,'')+' '+ISNULL(P.LastName,'') AS FullName,PS.Name FROM Person.BusinessEntityAddress PB JOIN Person.Person P ON PB.BusinessEntityID=P.BusinessEntityID JOIN Person.Address PA ON PB.AddressID=PA.AddressID JOIN Person.StateProvince PS ON PA.StateProvinceID=PS.StateProvinceID WHERE PS.Name='Florida' ;

--10.
--SELECT * FROM Person.Person WHERE FirstName = 'James' AND MiddleName='D.' AND LastName='Kramer';
SELECT VJ.[Emp.OrgName] FROM HumanResources.vJobCandidateEmployment VJ 
JOIN HumanResources.JobCandidate JC ON VJ.JobCandidateID=JC.JobCandidateID 
JOIN HumanResources.Employee E ON E.BusinessEntityID=JC.BusinessEntityID 
JOIN Person.Person P ON P.BusinessEntityID=E.BusinessEntityID WHERE P.FirstName = 'James' AND P.MiddleName='D.' and P.LastName='Kramer' ;

--11.

SELECT DISTINCT SalesOrderID, UnitPrice FROM Sales.SalesOrderDetail WHERE OrderQty =1;

--12.
SELECT Description FROM Production.ProductDescription PD 
JOIN Production.ProductModelProductDescriptionCulture PDM ON PD.ProductDescriptionID=PDM.ProductDescriptionID 
JOIN Production.Culture PC ON PC.CultureID = PDM.CultureID 
JOIN Production.ProductModel PM ON PM.ProductModelID=PDM.ProductModelID 
JOIN Production.Product P ON P.ProductModelID=PM.ProductModelID WHERE P.ProductID=736 AND PC.CultureID='fr';

--13.

SELECT POD.OrderQty,P.Name,ListPrice FROM Purchasing.PurchaseOrderDetail POD 
JOIN Production.Product P ON POD.ProductID=P.ProductID 
JOIN Sales.SpecialOfferProduct SOP ON SOP.ProductID=P.ProductID 
JOIN Sales.SalesOrderDetail SOD ON SOD.ProductID=SOP.SpecialOfferID 
JOIN Sales.SalesOrderHeader SOH ON SOH.SalesOrderID=SOD.SalesOrderID 
JOIN Sales.Customer C ON C.CustomerID=SOH.CustomerID WHERE C.CustomerID=1;

--select CustomerID from sales.Customer;
--14.
SELECT COUNT(P.ProductID) FROM Production.Product P JOIN Production.ProductSubcategory PS ON P.ProductSubcategoryID=PS.ProductSubcategoryID 
JOIN Purchasing.ProductVendor PV ON PV.ProductID=P.ProductID 
JOIN Purchasing.Vendor V ON V.BusinessEntityID=PV.BusinessEntityID 
JOIN Person.BusinessEntity BE ON BE.BusinessEntityID=V.BusinessEntityID 
JOIN Person.BusinessEntityAddress BA ON BA.BusinessEntityID=BE.BusinessEntityID 
JOIN Person.Address A ON A.AddressID=BA.AddressID WHERE PS.Name='Cranksets' AND A.City='London';

--SELECT COUNT(P.ProductID) FROM Production.Product P JOIN Production.ProductSubcategory PS ON P.ProductSubcategoryID=PS.ProductSubcategoryID JOIN Purchasing.ProductVendor PV ON PV.ProductID=P.ProductID WHERE PS.Name='Cranksets'
--SELECT City FROM Person.Address where city='London';

--15.
--CHAR is a fixed length string data type, so any remaining space in the field is padded with blanks. CHAR takes up 1 byte per character. So, a CHAR(100) field (or variable) takes up 100 bytes on disk, regardless of the string it holds.

--VARCHAR is a variable length string data type, so it holds only the characters you assign to it. VARCHAR takes up 1 byte per character, + 2 bytes to hold length information.  For example, if you set a VARCHAR(100) data type = ‘Jen’, then it would take up 3 bytes (for J, E, and N) plus 2 bytes, or 5 bytes in all.

--NVARCHAR can store unicode which basically takes two bytes per character.