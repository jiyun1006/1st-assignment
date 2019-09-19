const readline = require('readline');

const rl = readline.createInterface(
    {input: process.stdin, output: process.stdout}
);

rl.on('line', function (answer) {
    var num = '';
    var count = 0;

    for (var i = 1; i <= answer; i++) {

        num += i;

    }
    num = num.split('');

    for (var i = 0; i < num.length; i++) {
        if (num[i] == 3) {
            count++;
        } else if (num[i] == 6) {
            count++;
        } else if (num[i] == 9) {
            count++;
        }
    }
    console.log(count);

    rl.close();
});
