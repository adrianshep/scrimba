var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.billsPlusTips = [];
        
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = 0.20;
            } else if (bill >= 50 && bill < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.10;
            }

            this.tips[i] = bill * percentage;
            this.billsPlusTips[i] = bill + bill * percentage;
        };
    }
};

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 375, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.billsPlusTips = [];
        
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = 0.20;
            } else if (bill >= 100 && bill < 300) {
                percentage = 0.10;
            } else {
                percentage = 0.25;
            }

            this.tips[i] = bill * percentage;
            this.billsPlusTips[i] = bill + bill * percentage;
        };
    }
};

function calcAveTip(tips) {
    var totalTips = 0;
    for (var i = 0; i < tips.length; i++) {
        totalTips = totalTips + tips[i];
    }
    return totalTips / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = calcAveTip(john.tips);
mark.average = calcAveTip(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + "'s family's average tip of " + john.average + " is higher than " + mark.fullName + "'s family's average tip of " + mark.average + ".");
} else if (mark.average > john.average) {
    console.log(mark.fullName + "'s family's average tip of " + mark.average + " is higher than " + john.fullName + "'s family's average tip of " + john.average + ".");
} else {
    console.log(john.fullName + "'s family's average tip of " + john.average + " and " + mark.fullName + "'s family's average tip of " + mark.average + " are equal.");
}