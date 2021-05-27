const path = require('path');
const axios = require('axios');

module.exports = (app, passport) => {
  // PROFILE SECTION =========================
  app.get('/dashboard', isLoggedIn, (req, res) => {
    console.log('Dashboard!')
    res.sendFile(path.join(__dirname, '../client/build/index.html'), {
      user: req.user
    });
  });

  // LOGOUT ==============================
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/')
  });

  // =============================================================================
  // AUTHENTICATE (FIRST LOGIN) ==================================================
  // =============================================================================
  // LOGIN ===============================
  // process the login form
  app.post(
    '/login',
    passport.authenticate('local-login'), (req, res) => {
      if (req.user) {
        res.send({redirectUrl: '/dashboard'});
      } else {
        res.send({redirectUrl: '/'});
      }
    }
  );

  // SIGNUP =================================
  // Process the signup form
  app.post(
    '/signup',
    passport.authenticate('local-signup'), (req, res) => {
      if (req.user) {
        res.send({redirectUrl: '/dashboard'});
      } else {
        res.send({redirectUrl: '/'});
      }
    }
  );

  app.post('/call', (req, res) => {
    const keyword = req.body.keyword;
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=30.2672,-97.7431&radius=50000&keyword=${keyword}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      )
      .then(result => {
        res.json(result.data);
      });
  });
};

// route middleware to ensure user is logged in
const isLoggedIn = (req, res, next) => {
  console.log('isLoggedIn Req:', req.isAuthenticated())
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/');
  }
}
