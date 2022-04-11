USE sakila;
SELECT * FROM actor;

/*Display the first and last names of all actors from the table actor.*/
SELECT first_name AS `First Name`, last_name FROM actor;

/*Display the first and last name of each actor in a single column in lower case letters. Name the column Actor Name.*/
SELECT LOWER(CONCAT(first_name," " ,last_name)) AS `Actor Name` FROM actor;

SELECT * FROM film;

SELECT COUNT(*) AS `FILMS` FROM film WHERE rental_duration=6;

SELECT MAX(length) FROM film WHERE rental_duration=6;

/*RO*/
SELECT * FROM actor WHERE last_name LIKE "%RO%";

SELECT * FROM actor WHERE last_update="2006-02-15 04:34:33";

SELECT last_name, COUNT(last_name) FROM actor GROUP BY last_name HAVING COUNT(last_name)>2 ORDER BY last_name;


/*
SELECT column_names
FROM table_name
WHERE 
GROUP BY
HAVING
ORDER BY
*/