function frankenSplice(arr1, arr2, n) {

    
    if(n == 0){
      return  arr1;
    }
    if(n == 1){
      
      let result = arr2.slice(1,arr2.lenth);
      return  [arr2[0],...arr1,...result];
    }
    if(n > 1){      
      let partOne = arr2.slice(0,n);
      let partTwo = arr2.slice(n,arr2.length);
      return [...partOne,...arr1,...partTwo];
    }
  return arr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6,7,], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice([1, 2, 3, 4], [], 0));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));