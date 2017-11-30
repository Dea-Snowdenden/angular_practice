function Sum(num1, num2) {
    return num1 + num2;
}
//console.log(Sum(10, 7));
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
// console.log(mySum(20, 15));
function getName(firstName, lastName) {
    return firstName + '' + lastName;
}
// console.log(getName('Dea', 'Zee'));
function getThis(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + ' ' + lastName;
}
// console.log(getThis('Dea'));
function Void() {
    return;
}
