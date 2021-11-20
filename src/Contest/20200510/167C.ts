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
  const bookNum = rule[0];
  const algorithmNum = rule[1];
  const target = rule[2];

  let res = Infinity;

  const bookArrays: any = lines.map((line) => {
    return line.split(" ").map((int) => parseInt(int));
  });

  for (let bit = 0; bit < 1 << bookNum; bit++) {
    let row: any[] = [];
    let num = "";
    let resArray = [];
    resArray = Array(bookNum + 1).fill(0);

    for (let i = 0; i < bookNum; i++) {
      num += bookArrays[i];
      if (bit & (1 << i)) {
        //理解度と値段をプラスする
        for (let j = 1; j < bookNum + 1; j++) {
          resArray[j] += bookArrays[i][j];
        }
        resArray[0] += bookArrays[i][0];
        row.push(i);
      }
    }

    let flag = true;
    for (let k = 1; k < resArray.length; k++) {
      if (resArray[k] < target) {
        flag = false;
        break;
      }
    }

    if (flag && resArray[0] < res) {
      res = resArray[0];
    }
  }
  res === Infinity ? (res = -1) : res;
  console.log(res);
});
