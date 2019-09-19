const readline = require('readline');

const rl = readline.createInterface(
    {input: process.stdin, output: process.stdout}
);

rl.on('line', function (answer) {
    answer = answer.split(' ');
    pr = parseInt(answer[0]);
    for (var i = 0; i < answer[2]; i++) {
        pr += pr * parseFloat(answer[1] * 0.01)
    }

    console.log(pr.toFixed(2));
