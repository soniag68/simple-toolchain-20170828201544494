//simplemath.js
var sum = function(a, b) { //definiamo la funzione sum
  return a+b; 
}
 
var product = function(a, b) { //definiamo la funzione product
  return a*b; 
}
 
//var private = function(a,b) {
//  return "Io sono private!!"; 
}
 
exports.sum = sum; //esportiamo la funzione sum
exports.product = product; //esportiamo la funzione product 
//exports.private = private;
