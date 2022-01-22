function booWho(bool) {

    // console.log( typeof(bool) )
     if( bool === true || bool === false){
        bool = true;
     }else{
         bool = false;
     }
    return bool;
  }
  
  console.log(booWho(null));
  console.log(booWho(true));
  console.log(booWho(false));
  console.log(booWho([1, 2, 3]));
  console.log(booWho([].slice));
  console.log(booWho({ "a": 1 }));
  console.log(booWho(1));
  console.log(booWho(NaN));
  console.log(booWho("a"));
  console.log(booWho("true"));
  console.log(booWho("false"));