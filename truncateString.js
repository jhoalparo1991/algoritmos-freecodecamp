function truncateString(str, num) {
    let data = '';
    if( parseInt(str.length) > num){
        data = `${str.substr(0, num)}...` 
    }else{
        data = str.substr(0, num);
    }
  return data;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
//   A-tisket...
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
//   Peter Piper...
console.log(truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length
));
// A-tisket a-tasket A green and yellow basket
console.log(truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length + 2
));
// A-tisket a-tasket A green and yellow basket
console.log(truncateString("A-", 1));
// A...
console.log(truncateString("Absolutely Longer", 2));
// Ab...
