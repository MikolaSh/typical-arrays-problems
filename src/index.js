
exports.min = function min (array) {
  if(array===undefined||array.length==0){return 0;}
  var min = array[0];
  for(let arr of array){
    if(arr<min){min = arr}
  }
  return min;
}

exports.max = function max (array) {
  if(array===undefined||array.length==0){return 0;}
  var max = array[0];
  for(let arr of array){
    if(arr>max){max = arr}
  }
  return max;
}

exports.avg = function avg (array) {
  if(array===undefined||array.length==0){return 0;}
  var avr=0;
  for(var i=0;i<array.length;i++){
    avr+=array[i]
  }
  avr = avr/array.length;
  return avr;
}
