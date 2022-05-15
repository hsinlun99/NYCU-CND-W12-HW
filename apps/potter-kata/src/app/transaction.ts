export class Transaction {
  price(books: number[]){
    let bill = 0;
    let seriesCount = [0, 0, 0, 0, 0]; // 0, 1, 2, 3, 4目前各0本

    books.forEach(book => {
      switch (book) {
        case 0:
          seriesCount[0]++;
          break;
        case 1:
          seriesCount[1]++;
          break;
        case 2:
          seriesCount[2]++;
          break;
        case 3:
          seriesCount[3]++;
          break;
        case 4:
          seriesCount[4]++;
          break;
        default:
          break;
      }
    });

    let isDiscountable = 0;

    seriesCount.forEach(episode => {
      if (episode !== 0) {
        isDiscountable++;
      }
    });

    if (isDiscountable >= 2) { // 有兩本以上不同的書
      switch (isDiscountable) {
        case 2:
          bill += 8*2*0.95
          break;
        case 3:
          bill += 8*3*0.9
          break;
        case 4:
          bill += 8*4*0.8
          break;
        case 5:
          bill += 8*5*0.75
          break;
      
        default:
          break;
      }
    }else{
      let copiesOfAEpisode = Math.max(...seriesCount);
      bill = 8*copiesOfAEpisode;
    }
      
    return bill;
  }
}
