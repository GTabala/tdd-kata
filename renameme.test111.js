const {doSomething} = require('./renameme')

describe('number converter', () => {
  it('Should convert 1 to one', () => {
    expect(doSomething(1)).toBe(1);
  });
});