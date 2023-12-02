import fs from 'fs';

const example1 = 'day1/example1.txt',
  example2 = 'day1/example2.txt',
  input = 'day1/input.txt';

const partOne = (filePath: string) => {
  const strs = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
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
};

partOne(input);
