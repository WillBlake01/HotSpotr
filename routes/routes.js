const path = require('path');
const axios = require('axios');

module.exports = (app, passport) => {
  // PROFILE SECTION =========================
  app.get('/dashboard', isLoggedIn, (req, res) => {
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
    passport.authenticate('local-login', {
      successRedirect: '/dashboard', // redirect to the secure profile section
      failureRedirect: '/', // redirect back to the signup page if there is an error
      failureFlash: true // allow flash messages
    })
  );

  // SIGNUP =================================
  // process the signup form
  app.post(
    '/signup',
    passport.authenticate('local-signup', {
      successRedirect: '/dashboard', // redirect to the secure profile section
      failureRedirect: '/', // redirect back to the signup page if there is an error
      failureFlash: true // allow flash messages
    })
  );

  app.post('/call', (req, res) => {
    console.log(req.body);
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
  if (req.isAuthenticated()) return next();

  res.redirect('/');
}
