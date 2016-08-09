import { thinky, type, r } from './thinky';

// Create a model - the table is automatically created
export const Question = thinky.createModel('Question', {
  text: type.string().required(),
  creationDate: type.date().default(r.now()),
  expirationDate: type.date(),
  answers: type.array().schema(
    type.object().schema({
      user: type.string().required(),
      answer: type.string().required(),
    })),
});
