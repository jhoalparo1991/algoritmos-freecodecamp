function titleCase(str) {
    let arr = str.split(" ");
    let newArr = [];
    let result = ""; 
    for(let i=0; i < arr.length; i++){
        let data = arr[i].toLowerCase();
        result = data.charAt(0).toUpperCase() + data.slice(1);
        newArr.push(result)        
    }
    return newArr.join(" ");
  }
  
  titleCase("I'm a little tea pot");
  titleCase("sHoRt AnD sToUt");