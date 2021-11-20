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
  const num = reverseString(lines[0] as string);
  const actionList: number[][] = [];
  for (let i = 1; i < lines.length; i++) {
    let str = lines[i].split(" ");
    actionList.push([Number(str[0]), Number(str[1]), Number(str[2])]);
  }

  let res = true;

  actionList.some((action, index): any => {
    if (index === 0) {
      if (!judge(action[0], 0, 0, action[1], action[2])) {
        res = false;
        return true;
      }
    } else {
      if (
        !judge(
          action[0],
          actionList[index - 1][1],
          actionList[index - 1][2],
          action[1],
          action[2]
        )
      ) {
        return true;
      }
    }
  });

  //   console.log(num, actionList);
  console.log(res ? "Yes" : "No");
});

function judge(
  time: number,
  nowX: number,
  nowY: number,
  ansX: number,
  ansY: number
): boolean {
  //   console.log(time, nowX, nowY, ansX, ansY);
  const dist = ansX + ansY - nowX - nowY;
  //   console.log("dist", dist);
  if (time < dist) {
    return false;
  }
  if (dist % 2 !== time % 2) {
    return false;
  }

  if (time === 0) {
    return nowX === ansX && nowY === ansY;
  } else {
    const nextTime = time - 1;
    const xMinus =
      nowX === 0 ? false : judge(nextTime, nowX - 1, nowY, ansX, ansY);
    const yMinus =
      nowY === 0 ? false : judge(nextTime, nowX, nowY - 1, ansX, ansY);

    return (
      judge(nextTime, nowX + 1, nowY, ansX, ansY) ||
      judge(nextTime, nowX, nowY + 1, ansX, ansY) ||
      xMinus ||
      yMinus
    );
  }
}
