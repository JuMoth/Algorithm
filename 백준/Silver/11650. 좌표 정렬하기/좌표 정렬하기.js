const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map(el => el.split(' ').map(Number)) ;

const solution = input => {  
    return input.sort((a, b) => {
      
        return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
    
    }).map(el => el.join(' ')).join('\n')                  
}

console.log(solution(input));