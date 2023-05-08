import ErrorRepository from '../errors';

test.each([
  { code: 1, expected: 'SyntaxError' },
  { code: 2, expected: 'TypeError' },
  { code: 3, expected: 'RangeError' },
  { code: 4, expected: 'Unknown error' },
])('check ErrorRepository translate()', ({ code, expected }) => {
  const error = new ErrorRepository();
  expect(error.translate(code)).toEqual(expected);
});
