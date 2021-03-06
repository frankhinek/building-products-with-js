// our packages
import { User } from '../db';
import { hash, asyncRequest } from '../util';

export default (app) => {
  app.post('/api/register', asyncRequest(async (req, res) => {
    // get user input
    const { login, password, passwordRepeat } = req.body;

    // verify the same password was entered and confirmed
    if (password !== passwordRepeat) {
      res.status(400).send({ error: 'Passwords do not match!' });
      return;
    }

    // hash password
    const hashedPassword = hash(password);

    // check if login already exists
    const users = await User.filter({ login }).run();
    if (users.length > 0) {
      res.status(403).send({ error: 'User already exists!' });
      return;
    }

    // create new User and store in database
    const user = new User({
      login,
      password: hashedPassword,
    });
    await user.save();

    res.sendStatus(201);
  }));
};
