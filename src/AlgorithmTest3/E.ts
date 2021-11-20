const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  let alphaMap = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  const rule = lines.shift().split(" ").map(Number);
  const length = rule[0];

  const data: any = lines.map((line) => line);

  let count = 0;

  let res: any = "";
  if (length % 2 !== 0) {
    res += data[Math.floor(length / 2)].substring(0, 1);
  }
  let start = Math.floor(length / 2) - 1;
  //   console.log(res);
  for (let i = start; i >= 0; i--) {
    const ta1 = data[i];
    const ta2 = data[length - i - 1];

    // console.log("ta1", i);
    // console.log("ta2", length - i - 1);

    let flag = false;
    for (let j = 0; j < ta1.length; j += 1) {
      if (flag) break;
      const char1 = ta1.substring(j, j + 1);
      for (let k = 0; k < ta2.length; k += 1) {
        const char2 = ta2.substring(k, k + 1);
        if (char1 === char2) {
          res = char1 + res + char2;
          if (res.length === length) {
            console.log(res);
            return;
          }
          flag = true;
          break;
        }
      }
    }
    if (!flag) {
      console.log(-1);
      return;
    }
  }
  console.log(res);
});
