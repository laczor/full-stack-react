const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  // Passport will automatucally pass the logout() function to the request, which can be used
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  //Passport will automatically add the userData to the request
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
