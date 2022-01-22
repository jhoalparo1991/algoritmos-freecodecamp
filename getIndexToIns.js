function getIndexToIns(arr, num) {

    arr.push(num);
    let data = arr.sort((a, b) => a-b);

    return data.indexOf(num);
  }
  
  console.log(getIndexToIns([40, 60], 50));
  console.log(getIndexToIns([5, 3, 20, 3], 5))