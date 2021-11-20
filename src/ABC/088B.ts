const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line) {
  lines.push(line);
});

reader.on("close", function () {
  const cardNum = lines[0] as string;
  const cardArray = (lines[1] as string).split(" ");

  console.log(
    diff(
      makeNumArray(cardArray).sort(function (a, b) {
        return b - a;
      })
    )
  );
});

function diff(cardArray: number[]): number {
  let diff = 0;

  for (let i = 0; i < cardArray.length; i++) {
    if (i % 2 === 0) {
      diff += cardArray[i];
    } else {
      diff -= cardArray[i];
    }
  }

  return diff;
}

function makeNumArray(value: string[]): number[] {
  const numArray = [];

  for (let i = 0; i < value.length; i++) {
    numArray.push(Number(value[i]));
  }
  return numArray;
}
