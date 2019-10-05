var johnTipCalculator = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    billTips: [],
    calcTips: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.tips.push(this.bills[i] * 0.20);
                this.billTips.push(this.bills[i] + this.tips[i]);
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                this.tips.push(this.bills[i] * 0.15);
                this.billTips.push(this.bills[i] + this.tips[i]);
            } else {
                this.tips.push(this.bills[i] * 0.10);
                this.billTips.push(this.bills[i] + this.tips[i]);
            }
        };
    }
};

var markTipCalculator = {
    bills: [77, 375, 110, 45],
    tips: [],
    billTips: [],
    calcTips: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                this.tips.push(this.bills[i] * 0.20);
                this.billTips.push(this.bills[i] + this.tips[i]);
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                this.tips.push(this.bills[i] * 0.10);
                this.billTips.push(this.bills[i] + this.tips[i]);
            } else {
                this.tips.push(this.bills[i] * 0.25);
                this.billTips.push(this.bills[i] + this.tips[i]);
            }
        };
    }
};

function calcAveTip(tips) {
    for (var i = 0; i < tips.length; i++) {
        var totalTips = tips[i] + totalTips;
    }
    var aveTips = totalTips / tips.length;
    return aveTips;
}

function highestTippingFamily(aveTips) {
    
}

johnTipCalculator.calcTips();
console.log(johnTipCalculator.tips, johnTipCalculator.billTips);

markTipCalculator.calcTips();
console.log(markTipCalculator.tips, markTipCalculator.billTips);