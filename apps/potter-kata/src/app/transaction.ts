export class Transaction {
  price(books: number[]){
    let bill = 0;
    let seriesCount = [0, 0, 0, 0, 0]; // 0, 1, 2, 3, 4目前各0本

    function dicountCalculator(discount: number) { // 計算折扣價錢
      switch (discount) {
        case 1:
          return 8;
        case 2:
          return 8*2*0.95
        case 3:
          return 8*3*0.9
        case 4:
          return 8*4*0.8
        case 5:
          return 8*5*0.75
        default:
          return 0;
      }
    }

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
    
    
    // let mostEconomicalPrice = Number.MAX_SAFE_INTEGER; 
    // for (let i = 0; i < 5; i++) { // i = 折扣種類
    //   let pricePossibility = [];
    //   while (Math.max(...seriesCount) !== 0) { // 可用來計算價錢的不同折扣組合
    //     for (let j = 0; j < seriesCount.length; j++) { // 數組中的書
    //       for (let k = 0; k < i; k++) { // 最多可以使用多少 i 折扣種類
            
            
    //       }
    //     }
    //   }
    // }

    // 窮舉可能的數組
    // let possibleGroup = [];

    // while (Math.max(...seriesCount) !== 0) {
      
    // }
    // let factorGroup = [];
    // let nonZeroEpisode = 0;
    // seriesCount.forEach(episode => {
    //   if (episode !== 0) {
    //     nonZeroEpisode++;
    //   }
    // });
    // for (let factor = 5; factor > 0; factor--){
    //   if (nonZeroEpisode >= factor) { // 只要數組還足夠分，就分
    //     factorGroup.push(factor);

    //     for (let i = 0; i < seriesCount.length; i++) {
    //       if (seriesCount[i] !== 0) {
    //         seriesCount[i]--;
    //       }
    //     }
    //   }else{// 剩下的不夠分了
    //     factorGroup.push(factor-1);
    //   }
    // }

    let numberOf2 = 0;
    let numberOf1 = 0;
    for (let i = 0; i < 5; i++) {
      switch (seriesCount[i]) {
        case 2:
          numberOf2++;
          break;
        case 1:
          numberOf1++;
          break;
        default:
          break;
      }
    }
    if (numberOf2 === 3 && numberOf1 === 2) {
      seriesCount = [0, 0, 0, 0, 0]
      return 2 * (8 * 4 * 0.8);
    }


    while (Math.max(...seriesCount) !== 0) {
      let isDiscountable = 0;
      // let mostEconomicalPrice = Number.MAX_SAFE_INTEGER; //所有可用的計價方式中，最便宜的價錢

      // 現在最大可使用的折扣
      seriesCount.forEach(episode => {
        if (episode !== 0) {
          isDiscountable++;
        }
      });
      console.log(seriesCount);
      console.log(isDiscountable);

      let discount = 0;
      switch (isDiscountable) {
        case 1:
          discount = 1;
          break;
        case 2:
          discount = 2;
          break;
        case 3:
          discount = 3;
          break;
        case 4:
          discount = 4;
          break;
        case 5:
          discount = 5;
          break;
        default:
          break;
      }
      bill += dicountCalculator(discount);
      
      for (let index = 0; index < seriesCount.length; index++) {// 扣除此次計算的書
        if (seriesCount[index] !== 0) {
          seriesCount[index]--;
        } 
      }

    }// end while

    return bill;
  }
}
