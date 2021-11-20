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
    var res = a - b * 2;
    if (res > 0) {
        console.log(res);
    }
    else {
        console.log(0);
    }
});
//# sourceMappingURL=commonModel.js.map