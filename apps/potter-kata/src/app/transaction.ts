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

    while (Math.max(...seriesCount) !== 0) {
      let isDiscountable = 0;
      // let mostEconomicalPrice = Number.MAX_SAFE_INTEGER; //所有可用的計價方式中，最便宜的價錢

      // 現在最大可使用的折扣
      seriesCount.forEach(episode => {
        if (episode !== 0) {
          isDiscountable++;
        }
      });

      if (isDiscountable === 5) {
        let seriesTemp = [-1];

        seriesCount.forEach(element => {
          seriesTemp.push(element);
        });

        for (let i = 1; i < 6; i++) {
          if (seriesTemp[i] !== 0) {
            seriesTemp[i]--;
          }
        }

        let numberOf1 = 0;
        let numberOf0 = 0;
        for (let i = 1; i < 6; i++) {
          switch (seriesTemp[i]) {
            case 1:
              numberOf1++;
              break;
            case 0:
              numberOf0++;
              break;
            default:
              break;
          }
        }
        if (numberOf1 === 3 && numberOf0 === 2) {
          seriesCount = [0, 0, 0, 0, 0]
          bill += dicountCalculator(4)*2;
          break;
        }
      }

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
