function range(start, end) {
    if(start === end) {
      return [end];
    }
    return [start].concat(range(start+1, end));
}

console.log(range(1,5));

function sumRec(arr) {
  if(arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumRec(arr.slice(1));
}

console.log(sumRec([1,2,3,4]));

function exponent(base, exp) {
  if(exp === 0) {
    return 1;
  }

  return base * exponent(base, exp - 1);
}

console.log(exponent(2, 3));

function exponent2(base, exp) {
  if(exp === 0) {
    return 1;
  }

  if (exp % 2 === 0) {
    return Math.pow(base, 2) * Math.pow(exponent2(base, exp / 2), 2);
  } else {
    return base * Math.pow(exponent(base, (exp - 1) / 2), 2);
  }

}

console.log(exponent2(2, 3));


function fibonacci(n) {

  if (n === 1) {
    return [1];
  }

  if (n === 2) {
    return [1,1];
  }

  let len = fibonacci(n-1).length -1;
  return fibonacci(n-1).concat(fibonacci(n - 1)[len] + fibonacci(n - 1)[len-1]);

}

// console.log(fibonacci(3));
// let arr = [1];
// console.log(arr.push(3));

function deepDup(arr) {

  return arr.map(function(el) {
    if (Array.isArray(el)) {
      return deepDup(el);
    } else {
      return el;
    }
  });

}

console.log(deepDup([1,[2]]));

bsearch(arr, target) {
  if (arr.length === 1) {
    return arr[0];
  }

  let mid = arr.length / 2



};
