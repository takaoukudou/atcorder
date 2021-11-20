const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  const input = (lines[0] as string).split(" ");
  const A = [Number(input[0]), Number(input[1])];
  const B = [Number(input[2]), Number(input[3])];

  while (true) {
    B[0] -= A[1];
    if (B[0] <= 0) {
      console.log("Yes");
      break;
    }
    A[0] -= B[1];
    if (A[0] <= 0) {
      console.log("No");
      break;
    }
  }

  console.log(wNum >= hNum ? "unsafe" : "safe");
});
