export class Transaction {
  price(books: number[]){
    let bill = 0;

    
    books.forEach(book => {
      switch (book) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
          bill += 8;
          break;
        default:
          bill += 0;
          break;
      }
    });

    return bill;
  }
}
