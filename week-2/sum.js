function sum(ary) {
	return ary.reduce((prev, cur) => prev + cur);
}

function sum2(ary) {
  return ary.reduceRight((prev, cur) => prev + cur);
}

// 其實還有很多種方法，不過這應該是效能相對比較好的，不然要用遞迴：

function sum3(ary) {
  if (ary.length === 1) {
    return ary[0];
  }
  return ary[0] + sum3(ary.slice(1));
}

// 或是其他效能更差的神奇方法也可以

const array = [1, 5, 3, 2];
console.log(sum(array)); // 11
console.log(sum2(array));
console.log(sum3(array));

// sum(n)

function sum4(n) {
  return Array(n).fill(1).reduce((prev, _, index) => prev + index + 1); // arr[0] + (1+1) + (2+1) + ...
}

// ref: https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
// creating an array of [1..n]

function sum5(n) {
  return sum([...Array(n).keys()].map((x) => x + 1));
}

function sum6(n) {
  return sum(Array.from({length: n}, (_, i) => i + 1))
}

console.log(sum4(10));
console.log(sum5(10));
console.log(sum6(10));
