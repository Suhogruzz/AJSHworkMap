export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'SyntaxError'],
      [2, 'TypeError'],
      [3, 'RangeError']
    ]);
  }

  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : 'Unknown error';
  }
}
