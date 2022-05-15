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

  // testcase2: simple discount 
  test('2 different books', () => {
    const transaction = new Transaction();
    expect(
      transaction.price([0, 1]) + transaction.price([0, 2, 4]) + transaction.price([0, 1, 2, 4]) + transaction.price([0, 1, 2, 3, 4])
      ).toBe(8*2*0.95 + 8*3*0.9 + 8*4*0.8 + 8*5*0.75);
  });
});
