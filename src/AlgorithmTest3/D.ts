const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  const rule = lines.shift().split(" ").map(Number);
  const length = rule[0];
  const type = rule[1];

  const arrays: any[] = lines.map((line) => {
    const str = line.substring(0, line.length - 1);
    let arr = [];
    for (let i = 1; i < str.length; i += 3) {
      arr.push(str.slice(i, i + 3));
      i++;
    }
    return arr;
  });

  let res = "";

  for (let i = 0; i < length; i += 1) {
    let line2 = "";
    let line3 = "";

    arrays.some((ele, index) => {
      const str = ele[i];

      switch (index + 1) {
        case 1:
          if (str === ".#.") {
            res += 1;
            return true;
          } else if (str === "#.#") {
            res += 4;
            return true;
          }
          break;
        case 2:
          line2 = str;
          break;
        case 3:
          if (str === "#.#") {
            res += 0;
            return true;
          }
          line3 = str;
          break;
        case 4:
          if (str === "#..") {
            res += 2;
            return true;
          } else {
            if (line2 === "..#" && line3 === "..#" && str === "..#") {
              res += 7;
            } else if (line2 === "..#" && str === "..#") {
              res += 3;
            } else if (line2 === "#.." && str === "..#") {
              res += 5;
            } else if (line2 === "#.." && str === "#.#") {
              res += 6;
            } else if (line2 === "#.#" && str === "#.#") {
              res += 8;
            } else if (line2 === "#.#" && str === "..#") {
              res += 9;
            }
            return true;
          }
      }
    });
  }
  console.log(res);
});
