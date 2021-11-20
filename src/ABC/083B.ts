const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line) {
  lines.push(line);
});

reader.on("close", function () {
  const input = (lines[0] as string).split(" ");
  const maximum = input[0];
  const min = Number(input[1]);
  const max = Number(input[2]);

  console.log(sum(maximum, min, max));
});

function sum(maximum: string, min: number, max: number): number {
  let sum = 0;

  for (let i = 1; i <= Number(maximum); i++) {
    const iSum = digitSum(i);
    if (iSum >= min && iSum <= max) {
      sum = sum + i;
    }
  }

  return sum;
}

function digitSum(number): number {
  const numberArray: number[] = [];
  for (let i = 0; i < String(number).length; i++) {
    numberArray.push(+String(number).charAt(i));
  }
  return numberArray.reduce((accumulator, element) => {
    return accumulator + Number(element);
  });
}
