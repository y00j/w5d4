Array.prototype.myEach = function (callback) {

  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  }

};

const timesTwo = (element) => {
  return element * 2;
};

// Array.prototype.myMap = function (callback) {
//
//   for(let i = 0; i < this.length; i++) {
//     callback(this[i]);
//   }
// };



Array.prototype.myMap = function(callback){
  let arr = [];
  for(let i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }
  return arr;
};

var arr = [1,2,3,4,5];
arr.myEach(timesTwo);

console.log(arr.myMap(timesTwo));



Array.prototype.myReduce = function(callback, initialValue) {
  let i = 0;
  let array = this;
  if (initialValue === undefined) {
    initialValue = this[0];
    array = this.slice(1);
  }
  let accum = initialValue;

  array.myEach(function(el) {
    accum = callback(accum, el);
  });

  return accum;
};

const sum = function(acc, el) {
  acc = acc + el;
  return acc;
};

console.log(arr.myReduce(sum));
