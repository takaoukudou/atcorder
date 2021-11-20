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
  const tenNum = rule[0];
  const roadNum = rule[1];
  const heightArray = lines.shift().split(" ").map(Number);

  const roadArrays: any = lines.map((line) => {
    return line.split(" ").map((int) => parseInt(int));
  });
  const connect = new Array(tenNum).map((ele) => [0]);

  for (let i = 0; i < roadArrays.length; i++) {
    connect[roadArrays[i][0] - 1]
      ? connect[roadArrays[i][0] - 1].push(roadArrays[i][1])
      : (connect[roadArrays[i][0] - 1] = [roadArrays[i][1]]);
    connect[roadArrays[i][1] - 1]
      ? connect[roadArrays[i][1] - 1].push(roadArrays[i][0])
      : (connect[roadArrays[i][1] - 1] = [roadArrays[i][0]]);
  }

  let count = 0;
  for (let i = 0; i < connect.length; i++) {
    if (!connect[i]) {
      count++;
      continue;
    }
    let judge = true;
    connect[i].forEach((element) => {
      heightArray[i] > heightArray[element - 1] ? "" : (judge = false);
    });
    judge ? count++ : "";
  }
  console.log(count);
});
