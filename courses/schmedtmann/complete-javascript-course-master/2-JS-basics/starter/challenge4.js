var john = {
    fullName: 'John Smith',
    mass: 80,
    height: 1.9,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    fullName: 'Mark Jones',
    mass: 85,
    height: 1.8,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

console.log(john.fullName + '\'s BMI is ' + john.calcBMI());
console.log(mark.fullName + '\'s BMI is ' + mark.calcBMI());
console.log(john, mark);

var highestBMI = function() {
    if (john.bmi > mark.bmi) {
        console.log(john.fullName + '\'s BMI of ' + john.bmi + ' is higher than  ' + mark.fullName + '\'s BMI of ' + mark.bmi);
    } else if (mark.bmi > john.bmi) {
        console.log(mark.fullName + '\'s BMI of ' + mark.bmi + ' is higher than ' + john.fullName + '\'s BMI of ' + john.bmi);
    } else {
        console.log(mark.fullName + '\'s and ' + john.fullName + '\'s BMIs are the same: ' + mark.bmi);
    }
};

highestBMI();

/*
Alternative solution:
var highestBMI = function() {
    if (john.calcBMI > mark.calcBMI) {
        console.log(john.fullName + '\'s BMI of ' + john.bmi + ' is higher than  ' + mark.fullName + '\'s BMI of ' + mark.bmi);
    } else if (mark.bmi > john.bmi) {
        console.log(mark.fullName + '\'s BMI of ' + mark.bmi + ' is higher than ' + john.fullName + '\'s BMI of ' + john.bmi);
    } else {
        console.log(mark.fullName + '\'s and ' + john.fullName + '\'s BMIs are the same: ' + mark.bmi);
    }
};
*/