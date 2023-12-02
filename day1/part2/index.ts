import fs from 'fs';

const strs = fs.readFileSync('day1/part2/example.txt', 'utf-8').trim().split('\n');

console.log(strs);