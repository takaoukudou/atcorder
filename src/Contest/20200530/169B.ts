import { watchFile } from "fs";

const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  const rule = lines.shift().split(" ").map(Number);
  const hNum = rule[0];

  const data: number[] = lines.shift().split(" ").map(Number);

  let flag = 0;

  let res: bigint = BigInt(1);
  data.forEach((ele) => {
    if (ele === 0) {
      flag = 1;
      return;
    }
    if (flag !== 2) {
      res *= BigInt(ele);
      if (res > BigInt(Math.pow(10, 18))) {
        flag = 2;
      }
    }
  });

  if (flag === 1) {
    console.log(0);
    return;
  } else if (flag === 2) {
    console.log(-1);
    return;
  }
  console.log(Number(res));
});
