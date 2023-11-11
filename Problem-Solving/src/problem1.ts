{
const CheckInput = (params: string | number):number | undefined => {
if(typeof params === 'string'){
    return params.length;
}else if (typeof params === 'number'){
    return params * params;
}else{
    return undefined;
}
}

const resultString = CheckInput('Programming Hero');
console.log(resultString);

const resultNumber = CheckInput(10);
console.log(resultNumber);

}