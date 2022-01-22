function mutation(arr) {
    
    let partOne = arr[0].toLowerCase();   
    let partTwo = arr[1].toLowerCase();
    
    let value = partOne.split('');
    let value2 = partTwo.split('');
    let data;
    for(let i = 0; i < value2.length; i++){
       
         data = value.includes(value2[i]);
         if(data == false){
             return data   

         }
    }
    return data;
  }
  
  console.log(mutation(["hello", "hey"]));
  console.log(mutation(["hello", "Hello"]));
  console.log(mutation(["Alien", "line"]))
  console.log(mutation(["voodoo", "no"]))
//   return false