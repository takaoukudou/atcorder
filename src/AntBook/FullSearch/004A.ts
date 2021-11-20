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
  const num = rule[0];

  const data: any = lines.map((line) => {
    return line.split(" ").map((int) => parseInt(int));
  });

  let max = 0;

  data.forEach((element, index) => {
    const ex = data[index];
    for (let i = index + 1; i < num; i++) {
      const comp = data[i];
      const len = Math.sqrt(
        Math.pow(ex[0] - comp[0], 2) + Math.pow(ex[1] - comp[1], 2)
      );
      if (len > max) max = len;
    }
  });

  console.log(max);
});
