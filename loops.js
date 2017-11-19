function forLoop(array){
  for(var i = 0; i < 25; i++){
    if(i === 1){
      console.log("I am 1 strange loop.");
    } else {
      console.log(`I am ${i} strange loops.`);
    }
  array.push(i);
  }
  return array;
}

function whileLoop(n){
  while(n > 0){
    console.log(n--);
  }
  return 'done';
}

function doWhile(array){
  do{
    array.length
}