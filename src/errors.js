export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(1, 'SyntaxError');
    this.errors.set(2, 'TypeError');
    this.errors.set(3, 'RangeError');
  }

  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : 'Unknown error';
  }
}
