const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line) {
  lines.push(line);
});

reader.on("close", function () {
  const num = lines[0] as string;
  let mochis = new Map();

  for (let i = 1; i < lines.length; i++) {
    const key = lines[i];
    // console.log(key);
    mochis.set(key, "a");

    // (<any>Object).assign(mochis, JSON.parse(JSON.stringify(`${key}:a`)));
  }

  //   console.log(mochis);
  console.log(mochis.size);
});
