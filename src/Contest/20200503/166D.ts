const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  const x = Number(lines[0]);

  let a = 119;
  // let a = 10;

  while (true) {
    let b = a - x;
    b < -119 ? (b = -119) : "";
    for (let i = b; i < a; i++) {
      const sa = a - i;
      if (x % sa === 0) {
        const a5 = a * a * a * a * a;
        const b5 = i * i * i * i * i;
        if (a5 - b5 === x) {
          console.log(`${a} ${i}`);
          return;
        }
      }
    }
    a--;
  }
});
