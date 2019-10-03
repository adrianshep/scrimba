var johnTipCalculator = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    billTips: [],
    calcTip: function() {
        for (var i = 0; i < bills.length - 1; i++) {
            if (bills[i] < 50) {
                tips.push(bills[i] * 0.20);
                billTips.push(bills[i] + tips[i]);
            } else if (bills[i] >= 50 && bills[i] < 200) {
                tips.push(bills[i] * 0.15);
                billTips.push(bills[i] + tips[i]);
            } else {
                tips.push(bills[i] * 0.10);
                billTips.push(bills[i] + tips[i]);
            }
        };
    }
};