// 124, 48, 268
var tip;
var tips = [];
var billsWithTips = [];

function tipCalculator(bill) {
    if (bill < 50) {
        tip = 0.20
    } else if (bill >= 50 && bill < 200) {
        tip = 0.15
    } else {
        tip = 0.10
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