"use strict";
/** */
var lines = [];
var reader = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
reader.on("line", function (line) {
    lines.push(line);
});
reader.on("close", function () {
    var input = lines[0].split("");
    var a = +input[0];
    var b = +input[1];
    var c = +input[2];
    var res = 0;
    input.forEach(function (element) {
        if (element == "1")
            res++;
    });
    console.log(res);
});
//# sourceMappingURL=081A.js.map