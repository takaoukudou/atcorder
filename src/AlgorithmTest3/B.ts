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

  const data: any[] = lines.shift().split(" ").map(Number);
  console.log(data);
  let res = 1;
  data.map((ele) => {
    res *= ele;
    if (res >= Math.pow(10, 18)) {
      console.log(-1);
      return;
    }
  });
  console.log(res);
});
