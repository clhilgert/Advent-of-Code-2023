import fs from 'fs';

const input = fs.readFileSync('day6/input.txt', 'utf-8').trim().split('\n');

const sample = `
Time:      7  15   30
Distance:  9  40  200`
  .trim()
  .split('\n');

const partOne = (input: string[]) => {
  const parsedValues: number[][] = [];

  input.forEach((line) => {
    const matchResult = line.match(/\d+/g);
    if (matchResult !== null) {
      const values: number[] = matchResult.map((str) => parseInt(str, 10));
      parsedValues.push(values);
    }
  });

  const times = parsedValues[0], distances = parsedValues[1];
  const resArr = [];
  for (let i = 0; i < times.length; i++) {
    const t = times[i];
    let count = 0;
    for (let j = 1; j < t; j++) {
      const x = t - j;
      const res = j * x;
      const d = distances[i];
      if (res > d) {
        count++;
      }
    }
    resArr.push(count);
  }
  const total = resArr.reduce((a, c) => {
    return a * c;
  })
  return total;
};

console.log(partOne(input));
