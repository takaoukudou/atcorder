const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  const input = lines[0].split("").map(Number);

  const paternArray = [1, -1];
  const strArray = ["+", "-"];

  let ans: number[] = [input[0]];
  for (let i = 0; i < paternArray.length; i++) {
    for (let j = 0; j < paternArray.length; j++) {
      for (let k = 0; k < paternArray.length; k++) {
        let sum =
          input[0] +
          input[1] * paternArray[i] +
          input[2] * paternArray[j] +
          input[3] * paternArray[k];

        if (sum === 7) {
          console.log(
            input[0] +
              strArray[i] +
              input[1] +
              strArray[j] +
              input[2] +
              strArray[k] +
              input[3] +
              "=7"
          );
          return;
        }
      }
    }
  }

  console.log();
});
