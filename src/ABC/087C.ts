const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  const width = Number(lines[0]);
  let one: any[] = lines[1].split(" ");
  let two: any[] = lines[2].split(" ");

  for (let i = 0; i < width; i++) {
    one[i] = Number(one[i]);
    two[i] = Number(two[i]);
  }

  let max = 0;

  for (let i = 0; i < width; i++) {
    const curve = i;
    let tempMax = 0;
    for (let j = 0; j < width; j++) {
      if (j <= i) {
        tempMax += one[j];
      }
      if (j >= i) {
        tempMax += two[j];
      }

      if (tempMax > max) {
        max = tempMax;
      }
    }
  }

  console.log(max);
});
