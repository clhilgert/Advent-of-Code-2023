import fs from 'fs';

const sample = `
LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)
`
  .trim()
  .split('\n');

const input = fs.readFileSync('day8/input.txt', 'utf-8').trim().split('\n');

const partOne = (input: string[]) => {
  let path = input[0];
  input = input.slice(2);
  const record: Record<string, string[]> = {};
  let el: string | null = null;

  input.forEach((str) => {
    const [key, values] = str.split(' = ');
    const parsedValues = values
      .replace(/\(|\)/g, '')
      .split(', ')
      .map((value) => value.trim());

    record[key] = parsedValues;
  });

  let steps = 0,
    p = 0,
    d;
  el = 'AAA';
  while (el !== 'ZZZ') {
    if (path[p] === 'L') d = 0;
    else d = 1;
    el = record[el!][d];
    steps++;
    p++;
    if (p === path.length) p = 0;
  }
  return steps;
};

console.log(partOne(input));
