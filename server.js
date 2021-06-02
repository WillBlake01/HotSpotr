require('dotenv').config();
const express = require('express');
const path = require('path');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const winston = require('winston');
const expressWinston = require('express-winston');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const redis = require('redis');
const https = require('https');
const expressRequestId = require('express-request-id')();
const logger = require('./utils/logger.js');
const requestLogger = require('./utils/requestLogger.js');

// Set up port to be either the host's designated port, or 3001
const PORT = process.env.PORT || 3001;

// Instantiate Express App
const app = express();

// Import sequelize models
const db = require('./models');

// Initialize Redis store
let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient(process.env.REDIS_URL);

// Setup express app
app.use(cookieParser()); // read cookies (needed for auth)
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    resave: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Appends request ID to request object
app.use(expressRequestId);

// Pass passport for configuration
require('./config/passport')(passport, db.User);

// Required for passport
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// express-winston logger BEFORE the router
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: true,
      timestamp: new Date().toISOString(),
      colorize: true
    })
  ]
}));

// Implement Morgan request logger
app.use(morgan('dev')); // log every request to the console
app.use(requestLogger);

// Set default engine, and provide [react] extension
app.engine('js', require('express-react-views').createEngine());
app.set('views', __dirname + '/client/src/pages');
app.set('view engine', 'js');

// Serve up static assets
app.use(express.static('client/build'));

// Routes ======================================================================
require('./routes/routes')(app, passport); // load our routes and pass in our app and fully configured passport

// Define any API routes before this runs
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Request error handling
app.use((request, response) => {
  console.warn(new Date().toISOString(), request.method, request.originalUrl, '404');
  return response.status(404).render('404', {
    title: '404',
  })
});

// Error handling
app.use((error, request, response, next) => {
  if (response.headersSent) {
    return next(error);
  }
  console.log(error);
  return response.status(500).render('500', {
    title: '500',
  });
});

// Run server and sync database
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  })
  .on('listening', () => logger.info(`HTTP server listening on port ${PORT}!`));
});

module.exports = app;
