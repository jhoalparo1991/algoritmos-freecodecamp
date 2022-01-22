function repeatStringNumTimes(str, num) {
    if(num <= 0){
        return "";
    }
    let data = "";
    for(let i = 0; i < num; i++){
        data += str
    }
    return data;
  }
  
  console.log(repeatStringNumTimes("abc", 3));
  console.log(repeatStringNumTimes("*", 3));
  console.log(repeatStringNumTimes("abc", -2));