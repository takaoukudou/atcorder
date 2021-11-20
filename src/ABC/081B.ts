const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", function (line) {
  lines.push(line);
});
reader.on("close", function () {
  const input = lines[0] as string;
  const numbers = (lines[1] as string).split(" ");

  console.log(countDivide(numbers, Number(input[0]), 0));
});

function countDivide(numbers: string[], inputNum: number, count: number) {
  let nextNumbers: string[] = [];
  let nextFlag = true;

  numbers.forEach((number) => {
    if (Number(number) % 2 !== 0) {
      nextFlag = false;
    }

    let halfNumber = Number(number) / 2;
    nextNumbers.push(String(halfNumber));
  });

  if (nextFlag) {
    count++;
    return countDivide(nextNumbers, inputNum, count);
  } else {
    return count;
  }
}
