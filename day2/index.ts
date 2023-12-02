// 12 red cubes, 13 green cubes, and 14 blue cubes

import fs from 'fs';

const example1 = 'day2/example1.txt',
  input = 'day2/input.txt';

const partOne = (file: string) => {
  const lines = fs.readFileSync(file, 'utf-8').trim().split('\n');
  let gameNumber = 1;
  let total = 0;
  const colors: Record<string, number> = { r: 12, g: 13, b: 14 };

  lines.map((line) => {
    const games = line.slice(8).split(';');
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

partOne(input);
