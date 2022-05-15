import { Transaction } from './transaction';

describe('Transaction', () => {
  let transaction: Transaction;

  beforeEach(() => {
    transaction = new Transaction();
  });

  it('should create an instance', () => {
    expect(transaction).toBeTruthy();
  });

  // testcase 1: no discount
  test('3 copies of 2st book', () => {
    expect(transaction.price([1, 1, 1])).toBe(8*3);
  });

  // testcase 2: simple discount 
  test('simple discount', () => {
    expect(
        transaction.price([0, 1]) + 
        transaction.price([0, 2, 4]) + 
        transaction.price([0, 1, 2, 4]) + 
        transaction.price([0, 1, 2, 3, 4])
      ).toBe(
        8*2*0.95 + 
        8*3*0.9 + 
        8*4*0.8 + 
        8*5*0.75
      );
  });
  
  // testcase 3: several discount
  test('several discount', () => {
    expect(
        transaction.price([0, 0, 1]) + 
        transaction.price([0, 0, 1, 1]) + 
        transaction.price([0, 0, 1, 2, 2, 3]) + 
        transaction.price([0, 1, 1, 2, 3, 4])
      ).toBe(
        (8 + 8*2*0.95) + 
        (8*2*0.8*2) +
        (8*4*0.8 + 8*2*0.95) +
        (8 + 8*5*0.75)
      );
  });
});
