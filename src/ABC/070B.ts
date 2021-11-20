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
  const alice = [Number(input[0]), Number(input[1])];
  const bob = [Number(input[2]), Number(input[3])];

  if (alice[0] > bob[1] || bob[0] > alice[1]) {
    console.log(0);
    return;
  }

  const a = alice[0] > bob[0] ? alice[0] : bob[0];

  const b = alice[1] < bob[1] ? alice[1] : bob[1];

  console.log(b - a);
});
