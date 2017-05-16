import { helloWorld } from '../src/helpers';

describe('helloWorld', () => {
  it('should return a promise with a string', () => {
      return helloWorld().then(res => expect(res).to.equal('Hello World'));
  });
});
