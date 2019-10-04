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

johnTipCalculator.calcTips();
console.log(johnTipCalculator.tips, johnTipCalculator.billTips);