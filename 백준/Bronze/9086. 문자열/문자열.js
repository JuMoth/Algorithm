const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=1; i<=input[0]; i++) {
    let result = '';
    const str = input[i];
    result += str[0] + str[str.length-1];
    console.log(result);
}