const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  const input = (lines[0] as string).split(" ");
  const height = Number(input[0]);
  const width = Number(input[1]);
  let masuArrays: (string | number)[][] = [];
  for (let i = 1; i < lines.length; i++) {
    const strArray = lines[i].split("");

    masuArrays.push(
      strArray.map((obj: string) => {
        return obj.replace(/\./gi, "0");
      })
    );
  }

  console.log(buildOutput(masuArrays, height, width));
});

function buildOutput(
  masuArrays: (string | number)[][],
  height: number,
  width: number
): string {
  let arrays = masuArrays;
  masuArrays.forEach((masuArray, heightIndex) => {
    masuArray.forEach((masu, widthIndex) => {
      if (masu === "#") {
        if (widthIndex !== 0) {
          if (!judgeBom(masuArrays[heightIndex][widthIndex - 1])) {
            masuArrays[heightIndex][widthIndex - 1] =
              Number(masuArrays[heightIndex][widthIndex - 1]) + 1;
          }
        }
        if (heightIndex !== 0) {
          if (!judgeBom(masuArrays[heightIndex - 1][widthIndex])) {
            masuArrays[heightIndex - 1][widthIndex] =
              Number(masuArrays[heightIndex - 1][widthIndex]) + 1;
          }
        }
        if (widthIndex !== width - 1) {
          if (!judgeBom(masuArrays[heightIndex][widthIndex + 1])) {
            masuArrays[heightIndex][widthIndex + 1] =
              Number(masuArrays[heightIndex][widthIndex + 1]) + 1;
          }
        }
        if (heightIndex !== height - 1) {
          if (!judgeBom(masuArrays[heightIndex + 1][widthIndex])) {
            masuArrays[heightIndex + 1][widthIndex] =
              Number(masuArrays[heightIndex + 1][widthIndex]) + 1;
          }
        }
        if (widthIndex !== 0 && heightIndex !== 0) {
          //左上
          if (!judgeBom(masuArrays[heightIndex - 1][widthIndex - 1])) {
            masuArrays[heightIndex - 1][widthIndex - 1] =
              Number(masuArrays[heightIndex - 1][widthIndex - 1]) + 1;
          }
        }
        if (heightIndex !== 0 && widthIndex !== width - 1) {
          //右上
          if (!judgeBom(masuArrays[heightIndex - 1][widthIndex + 1])) {
            masuArrays[heightIndex - 1][widthIndex + 1] =
              Number(masuArrays[heightIndex - 1][widthIndex + 1]) + 1;
          }
        }
        if (widthIndex !== width - 1 && heightIndex !== height - 1) {
          //右下
          if (!judgeBom(masuArrays[heightIndex + 1][widthIndex + 1])) {
            masuArrays[heightIndex + 1][widthIndex + 1] =
              Number(masuArrays[heightIndex + 1][widthIndex + 1]) + 1;
          }
        }
        if (heightIndex !== height - 1 && widthIndex !== 0) {
          //左下
          if (!judgeBom(masuArrays[heightIndex + 1][widthIndex - 1])) {
            masuArrays[heightIndex + 1][widthIndex - 1] =
              Number(masuArrays[heightIndex + 1][widthIndex - 1]) + 1;
          }
        }
      }
    });
  });

  let res = "";

  arrays.forEach((array) => {
    res += array.join("");
    res += "\n";
  });

  return res;
}

function judgeBom(value: string | number) {
  return value === "#";
}
