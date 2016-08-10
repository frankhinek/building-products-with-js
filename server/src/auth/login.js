// NPM packages
import passport from 'passport';

export default (app) => {
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    if (req.user) {
      res.send({ user: req.user });
    } else {
      // TODO: This code is never called and needs to be refactored
      // bugref: https://github.com/yamalight/building-products-with-js/issues/7
      res.status(401).send({ error: 'Error logging in!' });
    }
  });
};
