// Combining and Slicing Arrays
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
console.log(combined);
 
const slice = combined.slice(1,4);
console.log(slice);
const combine = [...first, 'a', ...second];
console.log(combine);
