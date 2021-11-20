const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  let inputs: any[][] = [];
  for (let i = 0; i < lines.length; i++) {
    inputs.push([Number(lines[i]), false]);
  }

  let nextBtn = 1;
  let count = 0;
  while (true) {
    count++;

    nextBtn = inputs[nextBtn][0];

    if (inputs[nextBtn][1]) {
      console.log(-1);
      break;
    }

    if (nextBtn === 2) {
      console.log(count);
      break;
    }

    inputs[nextBtn][1] = true;
  }
});
