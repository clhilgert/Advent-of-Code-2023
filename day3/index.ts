import fs from 'fs';
import { getInput } from '../utils';

const readFile = (file: string) => {
  const lines = fs.readFileSync(file, 'utf-8').trim().split('\n');
  return lines;
};

const partOne = async () => {
  const file = await getInput(3);
  console.log(file);
}

