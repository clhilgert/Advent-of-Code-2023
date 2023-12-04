import fs from 'fs';

const lines = fs.readFileSync('day4/input.txt', 'utf-8').trim().split('\n');

const sample = `
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`
  .trim()
  .split('\n');

const partOne = (input: string[]) => {
  let total = 0;
  input.map((line) => {
    const colonIndex = line.indexOf(':');
    const cards = line
      .slice(colonIndex + 1)
      .trim()
      .split('|');
    const winNums = new Set(cards[0].trim().split(' ').filter(Boolean));
    const nums = cards[1].trim().split(' ').filter(Boolean);
    let score = 0;
    for (const num of nums) {
      if (winNums.has(num)) {
        score === 0 ? (score = 1) : (score *= 2);
      }
    }
    total += score;
  });
  return total;
};

const partTwo = (input: string[]) => {
  const cardArr = new Array(input.length).fill(1, 0);
  input.map((line, index) => {
    const colonIndex = line.indexOf(':');
    const cards = line
      .slice(colonIndex + 1)
      .trim()
      .split('|');
    const winNums = new Set(cards[0].trim().split(' ').filter(Boolean));
    const nums = cards[1].trim().split(' ').filter(Boolean);
    let numWins = 0;
    for (const num of nums) {
      if (winNums.has(num)) {
        numWins++;
      }
    }
    for (let i = 1; i <= numWins; i++) {
      cardArr[index + i] += cardArr[index];
    }
  }, 0);
  const res = cardArr.reduce((a, c) => {
    return a + c;
  });
  console.log(res);
};

partTwo(lines);
