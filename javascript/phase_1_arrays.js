// function uniq()


Array.prototype.uniq = function() {
  let uniqs = [];
  this.forEach(function(element) {
    if (!uniqs.includes(element)) {
      uniqs.push(element);
    }
  });
  return uniqs;
};

console.log([1,2,2,3].uniq());

Array.prototype.twoSum = function () {
  let zeroSums = [];

  for(let i = 0; i < this.length; i++) {
    for(let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        zeroSums.push([i,j]);
      }
    }
  }
  return zeroSums;
};

console.log([1,2,3,-1,-3].twoSum());

Array.prototype.transpose = function () {
  let transposed = [];
  for( let i = 0; i < this[i].length; i++) {
    let subarr = [];
    for (let j = 0; j< this.length; j++){
      subarr.push (this[j][i]);
    }
    transposed.push(subarr);
  }
  return transposed;
};

console.log([[1,2,3],[2,3,4]].transpose());
