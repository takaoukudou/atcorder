/** */

const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", function (line) {
  lines.push(line);
});
reader.on("close", function () {
  const input = (lines[0] as string).split("");
  const a = +input[0];
  const b = +input[1];
  const c = +input[2];

  let res: number = 0;

  input.forEach((element) => {
    if (element == "1") res++;
  });

  console.log(res);
});
