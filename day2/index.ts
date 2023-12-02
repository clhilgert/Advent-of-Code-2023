import fs from 'fs';
import { getInput } from '../utils';

const readFile = (file: string) => {
  const lines = fs.readFileSync(file, 'utf-8').trim().split('\n');
  return lines;
};

const partOne = async () => {
  const lines = await getInput(2);
  let gameNumber = 1;
  let total = 0;
  const colors: Record<string, number> = { r: 12, g: 13, b: 14 };

  lines.map((line) => {
    const colonIndex = line.indexOf(':');
    const games = line
      .slice(colonIndex + 1)
      .trim()
      .split(';');
    let willSum = true;
    games.forEach((game) => {
      const pick = game.split(',');
      pick.forEach((cube) => {
        const arr = cube.trim().split('');
        let pointer = 0;
        let num = '';
        while (arr[pointer] !== ' ') {
          num += arr[pointer++];
        }
        const color = arr[++pointer];
        const number = Number(num);
        if (colors[color] < number) willSum = false;
      });
    });
    if (willSum) total += gameNumber;
    gameNumber++;
  });
  console.log(total);
};

const partTwo = async () => {
  const lines = await getInput(2);
  let total = 0;

  lines.map((line) => {
    const choice: Record<string, number[]> = {};
    const colonIndex = line.indexOf(':');
    const games = line
      .slice(colonIndex + 1)
      .trim()
      .split(';');
    games.forEach((game) => {
      const pick = game.split(',');
      pick.forEach((cube) => {
        const arr = cube.trim().split('');
        let pointer = 0;
        let num = '';
        while (arr[pointer] !== ' ') {
          num += arr[pointer++];
        }
        const color = arr[++pointer];
        const number = Number(num);
        choice[color] = choice[color] ?? [];
        choice[color].push(number);
      });
    });
    let power = 1;
    Object.keys(choice).forEach((color) => {
      let max = Math.max(...choice[color]);
      power *= max;
    });
    total += power;
  });
  console.log(total);
};

await partOne();
partTwo();
