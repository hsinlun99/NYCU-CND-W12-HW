import { Transaction } from './transaction';

describe('Transaction', () => {
  it('should create an instance', () => {
    expect(new Transaction()).toBeTruthy();
  });

  // testcase1: no discount
  test('3 copies of 2st book', () => {
    const transaction = new Transaction();
    expect(transaction.price([1])).toBe(8*3);
  });
});
