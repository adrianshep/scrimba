// 124, 48, 268
var tip;
var tips = [];
var billsWithTips = [];

function tipCalculator(bill) {
    if (bill < 50) {
        tip = 0.20;
    } else if (bill >= 50 && bill < 200) {
        tip = 0.15;
    } else {
        tip = 0.10;
    }
    var billTip = bill * tip;
    tips.push(billTip);
    var billWithTip = bill + billTip;
    billsWithTips.push(billWithTip);
    console.log(tips, billsWithTips);
}

tipCalculator(124);
tipCalculator(48);
tipCalculator(268);

/*
Alternate solution:

var bills = [124, 48, 268];
tips = [tipCalculator(bills[0]),
        tipCalculator(bills[1]),
        tipCalculator(bills[2])];

billsWithTips = [bills[0] + tips[0],
                 bills[1] + tips[1],
                 bills[2] + tips[2]];

console.log(tips, billsWithTips);
*/