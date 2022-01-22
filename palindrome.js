function palindrome(string){
    return string.split('').reverse().join('');
}

function palindrome2(string){
    
    let data = string.split('');
    let value = "";

    for(let i = data.length -1 ; i >= 0; i--){
        value += data[i]
    }
    
    return value;

}
console.log(palindrome2('Este es un mes nuevo'));

console.log(palindrome('Alli ves sevilla'))