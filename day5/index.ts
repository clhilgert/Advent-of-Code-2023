import fs from 'fs';

const input = fs.readFileSync('day5/input.txt', 'utf-8').trim().split('\n');

const partOne = (input: string[]) => {
  const seeds = input[0]
    .split(':')[1]
    .trim()
    .split(' ')
    .filter(Boolean)
    .map(Number);
  console.log(seeds);
  const extractNumbers = (line: string): number[] => {
    return line
      .split(' ')
      .filter((element) => !isNaN(Number(element)))
      .map(Number);
  };

  const groupedData: number[][][] = [];
  let currentGroup: number[][] = [];

  input.forEach((line) => {
    if (line.trim() !== '' && !line.includes(':')) {
      const numbers = extractNumbers(line);
      currentGroup.push(numbers);
    } else if (line.includes(':') && currentGroup.length > 0) {
      groupedData.push([...currentGroup]);
      currentGroup = [];
    }
  });

  if (currentGroup.length > 0) {
    groupedData.push([...currentGroup]);
  }

  const resArr = [];
  for (const seed of seeds) {
    let curr = seed;
    groupLoop: for (const group of groupedData) {
      for (const arr of group) {
        if (curr === arr[1]) {
          curr = arr[0];
          continue groupLoop;
        } else if (curr > arr[1] && curr < arr[1] + arr[2]) {
          curr = curr - arr[1] + arr[0];
          continue groupLoop;
        }
      }
    }
    resArr.push(curr);
  }
  console.log(resArr);
  return Math.min(...resArr);
};

console.log(partOne(input));
