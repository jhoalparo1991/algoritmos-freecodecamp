function largestOfFour(arr) {

    let mayor = 0;
    let newArr = [];
    let data = [];
    for(let i=0; i < arr.length; i++){
      mayor = arr[i];
      mayor.sort((a,b)=> b-a);
      newArr = [...newArr,...mayor.slice(0,1)];
    }
    console.log(newArr);
    return newArr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);