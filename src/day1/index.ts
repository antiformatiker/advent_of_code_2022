import * as fs from 'fs';
import { slice, sort, sum } from 'ramda';
import * as readline from 'readline';

const elfs = async () => {
  const fileStream = fs.createReadStream('./src/day1/input.txt');

  const lines = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let elfs: number[] = [];
  let selectedElf = 0;

  for await (const line of lines) {
    if (line === '') {
      elfs = [...elfs, selectedElf];
      selectedElf = 0;
    } else {
      selectedElf += Number.parseInt(line);
    }
  }

  return elfs;
};

export const part1 = async () => {
  const e = await elfs();
  const result = sort((a, b) => b - a, e)[0];

  console.log({ result });
};

export const part2 = async () => {
  let e = await elfs();

  e = sort((a, b) => b - a, e);
  e = slice(0, 3, e);
  const result = sum(e);

  console.log({ result });
};
