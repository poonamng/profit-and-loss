function calculateProfitAndLoss(initial,quantity,current){
    if (initial>current){
        var loss=(initial-current)*quantity;
        var lossPercentage=(loss/initial)*100;
    }else 
// }


// function calculateProfitAndLoss(initial, quantity, current) {
//     if (initial > current) {
//         var loss = (initial - current) * quantity;
//         var lossPercentage = (loss / initial) * 100;
      
//         // showOutput(
//         //   `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
//         // );
//     } else if (current > initial) {
//         var profit = (current - initial) * quantity;
//         var profitPercentage = (profit / initial) * 100;
     
//         // showOutput(
//         //   `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
//         // );
//     } else {
//         showOutput(`enter something`);
//        }
    //  }
    

calculateProfitAndLoss(10,10,100)