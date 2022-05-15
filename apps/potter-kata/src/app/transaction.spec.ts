import { Transaction } from './transaction';

describe('Transaction', () => {
  it('should create an instance', () => {
    expect(new Transaction()).toBeTruthy();
  });

  // testcase1: no discount
  test('3 copies of 2st book', () => {
    const transaction = new Transaction();
    expect(transaction.price([1, 1, 1])).toBe(8*3);
  });

  // testcase2: simple discount 1
  test('2 different books', () => {
    const transaction = new Transaction();
    expect(transaction.price([0, 1])).toBe(8*2*0.95);
  });
});
