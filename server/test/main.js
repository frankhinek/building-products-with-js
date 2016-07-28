// npm packages
import test from 'tape';
import request from 'supertest';

// our packages
import app from '../src/app';

test('GET /', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /text\/html/)
    .end((err, res) => {
      const expectedBody = 'Hello world!';
      const actualBody = res.text;

      t.error(err, 'No error');
      t.equal(actualBody, expectedBody, 'Retrieve body');
      t.end();
    });
});

test('Return 404 on nonexistant URL', (t) => {
  request(app)
    .get('/GETShouldFailOnNonExistantURL')
    .expect(404)
    .expect('Content-Type', /text\/html/)
    .end((err, res) => {
      const expectedBody = 'Cannot GET /GETShouldFailOnNonExistantURL\n';
      const actualBody = res.text;

      t.error(err, 'No error');
      t.equal(actualBody, expectedBody, 'Retrieve body');
      t.end();
    });
});
