const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  let res = 0;
  const input = lines.shift().split("");

  for (let bit = 0; bit < 1 << input.length; bit++) {
    let row: any[] = [];
    let num = "";
    let numArray = [];
    for (let i = 0; i < input.length; i++) {
      num += input[i];
      if (bit & (1 << i)) {
        numArray.push(Number(num));
        num = "";
        row.push(i);
      }
    }
    if (num) numArray.push(Number(num));

    if (row.indexOf(input.length - 1) !== -1) {
      const rowSum = numArray.reduce((ele, sum) => {
        return (sum += ele);
      }, 0);
      res += rowSum;
    }
  }

  console.log(res);
});
