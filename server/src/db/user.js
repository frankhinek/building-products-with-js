import { thinky, type, r } from './thinky';

// Create a model - the table is automatically created
export const User = thinky.createModel('User', {
  login: type.string().required(),
  password: type.string().required(),
  registrationDate: type.date().default(r.now()),
});
