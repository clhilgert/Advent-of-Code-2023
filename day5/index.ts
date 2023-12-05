import fs from 'fs';

const input = fs.readFileSync('day5/input.txt', 'utf-8').trim().split('\n');

const sample = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`
  .trim()
  .split('\n');

const partOne = (input: string[]) => {
  const seeds = input[0]
    .split(':')[1]
    .trim()
    .split(' ')
    .filter(Boolean)
    .map(Number);
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
  return Math.min(...resArr);
};

const partTwo = (input: string[]) => {
  const seedRanges = input[0]
    .split(':')[1]
    .trim()
    .split(' ')
    .filter(Boolean)
    .map(Number);

  const seeds = [];
  let isRange = false;
  for (let i = 0; i < seedRanges.length; i++) {
    if (isRange) {
      let seed = seedRanges[i - 1];
      const range = seedRanges[i];
      for (let j = 0; j < range; j++) {
        seeds.push(seed + j);
      }
    }
    isRange = !isRange;
  }

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
  return Math.min(...resArr);
};

console.log(partTwo(input));
