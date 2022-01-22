function bouncer(arr) {
    // let value = NaN;
    let data;
    data = arr
    .filter( value => value !== false)
    .filter( value => value !== "")
    .filter( value => value !== null)
    .filter( value => value !== undefined)
    .filter( value => value === value)
    .filter( value => value !== 0);


    console.log(data.length);
    return data;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));
  console.log(bouncer([false, null, 0, NaN, undefined, ""]));
  console.log(bouncer([null, NaN, 1, 2, undefined]));