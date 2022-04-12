use BookMyShow;
SELECT * FROM ticket;

CREATE TABLE ticket (
	ticketId int,
    noOfSeats int,
    amount float,
    userId int,
    PRIMARY KEY(ticketId),
    FOREIGN KEY(userId) REFERENCES USER(userId)
);

INSERT INTO ticket (ticketId, noOfSeats, amount) VALUES (6,3, 100.0);
INSERT INTO ticket (ticketId, noOfSeats, amount, userId) VALUES (3,4, 1000.0, 9);

SELECT ticket.ticketId, ticket.noOfSeats, USER.name FROM ticket LEFT OUTER JOIN `USER` ON ticket.userId = USER.userId;
SELECT * FROM ticket RIGHT OUTER JOIN `USER` ON ticket.userId = USER.userId;
SELECT * FROM ticket INNER JOIN `USER` ON ticket.userId = USER.userId;