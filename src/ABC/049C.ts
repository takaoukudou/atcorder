const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

function reverseString(str: string) {
  return str.split("").reverse().join("");
}

reader.on("close", function () {
  const input = reverseString(lines[0] as string);
  const tmp = false;

  makable(input);
  const res = flag ? "YES" : "NO";
  console.log(res);
});

const word1 = reverseString("dream");
const word2 = reverseString("dreamer");
const word3 = reverseString("erase");
const word4 = reverseString("eraser");
const wordArray = [word1, word2, word3, word4];
let flag = false;

function makable(input: string): void {
  wordArray.forEach((word) => {
    if (input.startsWith(word)) {
      const remaing = input.substr(word.length);
      if (remaing === "") {
        flag = true;
        return;
      }
      makable(remaing);
    }
  });
}
