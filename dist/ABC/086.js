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
    var input = lines[0].split(" ");
    var a = +input[0];
    var b = +input[1];
    var res = (a * b) % 2 === 0 ? "Even" : "Odd";
    console.log(res);
});
//# sourceMappingURL=086.js.map