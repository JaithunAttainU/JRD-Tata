show databases;
use BookMyShow;
show tables;

/*
DDL Commands
CREATE
ALTER
DROP
*/

/*Create a database*/
create database BookMyShow;

/*Create a new table*/
create table USER (
	userId int NOT NULL,
    name varchar(255) NOT NULL,
    emailId varchar(255) NOT NULL,
    dateOfBirth date,
    password varchar(255) NOT NULL,
    mobile varchar(255),
    UNIQUE(emailId)
);

/*Add column to a table*/
alter table USER ADD mobile varchar(255);

/*Drop column in a table*/
alter table USER DROP column mobile;

/*Modify column datatype in a table*/
alter table USER MODIFY column mobile int;

/*Drop a table and all its data*/
drop table USER;


/*
DML Commands
INSERT
UPDATE
DELETE
*/

/*Insert data into a table*/
insert into USER (userId, name, emailId, password) values (1, "Brian", "brian@gmail.com", "brian123");
insert into USER (userId, name, emailId, password) values (2, "Nitin", "2@gmail.com", "xyz");
insert into USER (userId, name, emailId, password, mobile) values (3, "Rahul", "3@gmail.com", "xyz", "453463432");
insert into USER (userId, name, emailId, password) values (4, "Rajnish", "4@gmail.com", "xyz");
insert into USER (userId, name, emailId, password, mobile) values (5, "Nileshware", "5@gmail.com", "xyz", "434563424");

/*Update data in a table*/
update USER SET name="Rajnish Kumar", mobile="345435", emailId="rajnish@gmail.com" where emailId="4@gmail.com";
update USER set mobile=null where emailId="3@gmail.com";

/*Delete data in a table*/
delete from USER where emailId="rajnish@gmail.com";

/*
DQL Command
SELECT
*/
select * from User where password="xyz" AND (mobile="434563424" OR mobile="453463432") ORDER BY name DESC;
select * from User where not password="xyz";
select name, emailId from User ORDER BY name DESC LIMIT 2;
select * from USER;
select name, emailId from USER;


