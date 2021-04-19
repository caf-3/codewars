function sumDigits(num){
    let strNumArr = String(num).split('');
    let sum =0;
    strNumArr.map(val => {
        if(!val.includes('-', '+')) sum += Number(val)
    });
    return sum;

}
sumDigits(125);