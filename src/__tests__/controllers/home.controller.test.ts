import { expect, server, BASE_URL } from '../setup';
import supertest from 'supertest';

describe('Index page test', () => {
  it('gets base url', (done) => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err: Error, res: supertest.Response) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('HOME');
        done();
      });
  });
});
