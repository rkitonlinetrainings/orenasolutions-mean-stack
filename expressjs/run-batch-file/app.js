const fs = require("fs");
const childProcess = require("child_process");

const bash_run = childProcess.spawn("bin/bash", {env: process.env});

bash_run.stdout.on("data", function(data) {
    console.log("stdout: " + data);
});

bash_run.stderr.on("data", function(data) {
    console.log("stderr: " + data);
});

const input = fs.createReadStream("input.txt");
const output = fs.createWriteStream("output.txt");

bash_run.stdout.pipe(output);
input.pipe(bash_run.stdin);