"use strict";
var lines = [];
var reader = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
reader.on("line", function (line) {
    lines.push(line);
});
reader.on("close", function () {
    var input = lines[0];
    var numbers = lines[1].split(" ");
    console.log(countDivide(numbers, Number(input[0]), 0));
});
function countDivide(numbers, inputNum, count) {
    var nextNumbers = [];
    numbers.forEach(function (number) {
        if (Number(number) % 2 === 0)
            nextNumbers.push(number);
    });
    if (nextNumbers.length === inputNum)
        countDivide(nextNumbers, inputNum, count);
    return count;
}
//# sourceMappingURL=081B.js.map