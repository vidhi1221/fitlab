var express = require('express');
var indexRouter = require('./routes/index');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var session = require('express-session')
var httpErrors = require('http-errors')
var path = require('path')
const { urlencoded } = require('express');
var cors = require('cors')
var userRouter = require('./routes/user')
var propertyRouetr = require('./routes/property')


var app = express()
app.use(cors())
app.use(session({
  secret: "asdasd",
  resave:false,
  saveUninitialized:false

}))
const mongoose = require('mongoose')

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
console.log('process.env.db', process.env.db)
mongoose.connect(process.env.db , { useNewUrlParser: true });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/',indexRouter)
app.use('/user',userRouter)
app.use('/property',propertyRouetr)


module.exports = app;