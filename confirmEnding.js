function confirmEnding(str, target) {
    let strLength = str.length
    let targetLength = target.length
    let initial = (strLength - targetLength);

    // console.log(initial);

    let data = str.slice(initial, str.length);
    // console.log(data)
    if(data == target){
        return true;
    }
    return false;
  }
  
  console.log(confirmEnding("Bastian", "n"));
  console.log(confirmEnding("Open sesame", "sage"));