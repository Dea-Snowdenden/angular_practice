function Sum(num1, num2){
    return num1 + num2;
}

//console.log(Sum(10, 7));

let mySum = function(num1: any, num2: any): number{
    if(typeof num1 ==  'string'){
        num1 = parseInt(num1);
    }
    if(typeof num2 == 'string'){
        num2 = parseInt(num2);
    }
    return num1 +  num2;
}
// console.log(mySum(20, 15));

function getName(firstName: string, lastName: string): string{
    return firstName+''+ lastName;
}
// console.log(getName('Dea', 'Zee'));

function getThis(firstName:string, lastName?: string): string {
    if(lastName == undefined){
        return firstName;
    }
    return firstName+ ' ' + lastName;
}

// console.log(getThis('Dea'));

function Void(): void{
    return;
}