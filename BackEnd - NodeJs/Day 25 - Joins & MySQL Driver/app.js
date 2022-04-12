const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan')
const dotenv = require('dotenv')
dotenv.config()
//import Promise base version of mysql2
const mysql = require('mysql2/promise');

var cors = require('cors')

//connecting to DB
const { initMongoDB } = require('./db')
initMongoDB()

let connection;

//Connect mysql2
async function connectMySQL() {
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'BookMyShow'
  });
}

connectMySQL()
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const moviesRouter = require('./routes/movies');

const app = express();
app.use(cors({
  origin: ['https://cloud.mongodb.com', 'https://www.section.io'],
  methods: 'POST'
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);

//Route to get the users
app.get('/bookMyShowUsers/:userId', async (req, res) => {
  const { userId } = req.params;
  const [rows, fields] = await connection.execute(`SELECT * FROM USER WHERE userId = ${userId}`);

  console.log("Rows", rows);
  console.log("Fields", fields);
  res.send(rows)
})
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
