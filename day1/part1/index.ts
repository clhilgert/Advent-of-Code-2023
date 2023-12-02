import fs from 'fs';

const strs = fs.readFileSync('day1/part1/input.txt', 'utf-8').trim().split('\n');

let total = 0;

for (const str of strs) {
  let l = 0,
    r = str.length - 1,
    first,
    last;
  while (!first || !last) {
    if (!isNaN(str[l])) {
      first = str[l];
    }
    if (!isNaN(str[r])) {
      last = str[r];
    }
    if (!first) l++;
    if (!last) r--;
  }
  total += Number(first + last);
}

console.log(total);