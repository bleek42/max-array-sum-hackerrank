function maxSubsetSum(arr) {
  if (!Array.isArray(arr)) throw new TypeError('input must be an array');
  if (arr === null || arr.length === 0) throw new Error('invalid input');
  if (arr.length === 1) return arr[0];

  let max = Math.max(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    if (isNaN(arr[i])) throw new TypeError('all array elements must be integers');
    max = Math.max(arr[i - 2] + arr[i], max);
    max = Math.max(arr[i], max);
    arr[i] = max;
  }
  return max;
}

const myArr = [3, 5, -7, 8, 10];
console.log(maxSubsetSum(myArr));