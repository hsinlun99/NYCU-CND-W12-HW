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

    while (Math.max(...seriesCount) !== 0) {
      let isDiscountable = 0;

      // 現在最大可使用的折扣
      seriesCount.forEach(episode => {
        if (episode !== 0) {
          isDiscountable++;
        }
      });
      console.log(seriesCount);
      console.log(isDiscountable)

      if (isDiscountable >= 2) { // 可以使用折扣(有兩本以上不同的書)
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
        for (let index = 0; index < seriesCount.length; index++) {// 扣除此次使用了折扣的書
          if (seriesCount[index] !== 0) {
            seriesCount[index]--;
          } 
        }

      }else{ // 只買了一集
        let copiesOfAEpisode = 0;
        for (let index = 0; index < seriesCount.length; index++) {// 找出買了幾本，然後扣掉
          if (seriesCount[index] > copiesOfAEpisode) {
            copiesOfAEpisode = seriesCount[index];
            bill += 8*copiesOfAEpisode;

            seriesCount[index] = 0;
          } 
        }
      }
    }// end white

    return bill;
  }
}
