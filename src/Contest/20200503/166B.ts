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
  const humanNum = rule[0];
  const type = rule[1];

  const data: any = lines.map((line) => {
    return line.split(" ").map((int) => parseInt(int));
  });

  let humanArray: boolean[] = new Array(humanNum).fill(false);
  let count = 0;
  for (let i = 1; i < type * 2; i += 2) {
    data[i].forEach((element) => {
      if (!humanArray[element - 1]) {
        count++;
        humanArray[element - 1] = true;
      }
    });
  }
  console.log(humanNum - count);
});
