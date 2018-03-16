Array.prototype.bubbleSort = function(){
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for(let i = 0; i < this.length - 1; i++ ) {
      let cur = this[i];
      let next = this[i+1];
      if (cur > next) {
        swap(this, i, i+1);
        sorted = false;
      }
    }
  }
  return this;
};

function swap(arr, i , j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

console.log([5, 4, 3, 2, 1].bubbleSort());

String.prototype.substrings = function() {
  let substrings = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = i; j < this.length; j++) {
      substrings.push(this.slice(i,j));
    }
  }
  return substrings;
};


console.log('abcdesf'.substrings());
