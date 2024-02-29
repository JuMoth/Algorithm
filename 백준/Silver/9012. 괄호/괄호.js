const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 1; i <= input[0]; i++){
    const stack = [];
    let result = true;
    for(let j = 0; j< input[i].length; j++){
        if(input[i][j] === '(') {
            stack.push(input[i][j]);
        } else {
            if(!stack.pop()){
                result = false
            }
        }
    }
    if(stack.length !== 0){
        result = false
    }
        

    if(result == false)
        console.log('NO')
    else
        console.log('YES')
}
