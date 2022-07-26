'use strict';

const getNo = document.getElementById('no');
const result = document.getElementById('result');
const btn = document.getElementById('ok');

const oneDigit = function (number) {
    const ans = [];
    if(number < 4) 
        ans.push('I'.repeat(number));
    else {
        const x = number % 5;
        if(number === 4)
            ans.push('IV')
        else if (number === 9)
            ans.push('IX')
        else {
            ans.push('V');
            ans.push('I'.repeat(x))
        }
    }
    return ans;
}

const twoDigit = function(number){
    const ans = [];
    if (number/10 < 5){
        if(Math.floor(number/10) === 4) 
            ans.push('XL')
        else
            ans.push('X'.repeat(number/10))
        ans.push(oneDigit(number%10))
    }  
    else if (number/10 > 5) {
        if(Math.floor(number/10) === 9) {
            ans.push('XC')
            ans.push(twoDigit(number-90))
        }
        else {
            ans.push('L')
            ans.push(twoDigit(number-50))
        }     
    } else if (number === 50){
        ans.push('L');
    }
    return ans.flat()
}

const threeDigit =  function(number) {
    const ans = [];
    if(number/100 < 5){
        if(Math.floor(number/100) === 4) 
            ans.push('CD')
        else
            ans.push('C'.repeat(number/100))
        ans.push(twoDigit(number%100))
    }
    else if (number/100 > 5){
        if(Math.floor(number/100) === 9) {
            ans.push('CM')
            ans.push(threeDigit(number-900))
        }
        else {
            ans.push('D')
            ans.push(threeDigit(number-500))
        }  
    } else if (number === 500) {
        ans.push('D');
    }
    return ans.flat()
}

const fourDigit = function(number) {
    const ans = [];
    if(number/1000 < 5){
        ans.push('M'.repeat(number/1000))
        ans.push(threeDigit(number%1000))
    }
    return ans.flat()
}

const getRoman = function(number) {
    switch (number.length) {
        case 1: {
            result.innerHTML = oneDigit(Number(number)).join('');
            break;
        }
        case 2: {
            result.innerHTML = twoDigit(Number(number)).join('');
            break;
        }  
        case 3: {
            result.innerHTML = threeDigit(Number(number)).join('');
            break
        }
        case 4:{
            result.innerHTML = fourDigit(Number(number)).join('');
            break
        }
        default:
            result.innerHTML = 'No result Found!';
            break;
    }
}

btn.addEventListener('click', function(){
    const x = Number(getNo.value)
    if(x > 0 && x < 4000) {
        getRoman(getNo.value);
    }  else {
        alert('Given number out of Range :- Enter number in range 1 to 3999');
    }
});

getNo.addEventListener('keyup', function (event) { 
    if (event.key === "Enter") btn.click();
});