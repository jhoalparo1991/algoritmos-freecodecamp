function findElement(arr, func) {
    let num = 0;
    for(let i = 0; i < arr.length; i++){
        let data = arr[i];
       // console.log(data);
        if( (arr[i] % 2) === 0){
           num = arr[i];
           break;
        }
    }
    if(num > 0){
        return num;
    }else{
        return undefined;
    }
    // console.log(result);
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);

  findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
//   return 8
  findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })
//   undefine

// (1+3+5+8+9+10) = 36/2= 16 
// 1, 3, 5, 9 = 18/2=9