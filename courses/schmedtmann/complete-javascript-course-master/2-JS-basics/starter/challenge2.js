var aveScoreJohn = (89 + 120 + 103)/3;
var aveScoreMike = (116 + 94 + 123)/3;
var aveScoreMary = (97 + 134 + 105)/3;

console.log(aveScoreJohn, aveScoreMike, aveScoreMary);

/*
if (aveScoreJohn > aveScoreMike) {
    console.log('John\'s average score of ' + aveScoreJohn + ' beats Mike\'s.')
} else if (aveScoreJohn < aveScoreMike) {
    console.log('Mike\'s average score of ' + aveScoreMike + ' beats John\'s.')
} else {
    console.log('John\'s average score of ' + aveScoreJohn + ' is equal to Mike\'s.')
}
*/

switch(true) {
    case aveScoreJohn > aveScoreMike && aveScoreJohn > aveScoreMary:
        console.log('John\'s average score of ' + aveScoreJohn + ' beats Mike\'s and Mary\'s.');
        break;
    case aveScoreJohn < aveScoreMike && aveScoreMike > aveScoreMary:
        console.log('Mike\'s average score of ' + aveScoreMike + ' beats John\'s and Mary\'s.');
        break;
    case aveScoreJohn < aveScoreMike && aveScoreMike < aveScoreMary:
        console.log('Mary\'s average score of ' + aveScoreMary + ' beats John\'s and Mike\'s.');
        break;
    case aveScoreJohn === aveScoreMike && aveScoreJohn > aveScoreMary:
        console.log('John\'s and Mike\'s average score is tied at ' + aveScoreJohn + ' and beats Mary\'s.');
        break;
    case aveScoreJohn === aveScoreMary && aveScoreJohn > aveScoreMike:
        console.log('John\'s and Mary\'s average score is tied at ' + aveScoreJohn + ' and beats Mike\'s.');
        break;
    case aveScoreMike === aveScoreMary && aveScoreJohn < aveScoreMike:
        console.log('Mike\'s and Mary\'s average score is tied at ' + aveScoreMike + ' and beats John\'s.');
        break;
    default:
        console.log('John\'s and Mike\'s and Mary\'s average score is tied at ' + aveScoreJohn + '.')
}
