// 124, 48, 268

var tips = [];
var billsWithTips = [];

function tipCalculator(bill) {
    var billTip = bill * 0.2;
    tips.push(billTip);
    var billTipAndBill = bill * 1.2;
    billsWithTips.push(billTipAndBill);
    console.log(tips, billsWithTips);
}

tipCalculator(124);
tipCalculator(48);
tipCalculator(268);