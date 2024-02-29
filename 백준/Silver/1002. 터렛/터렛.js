let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

for(let i=1; i<=input[0]; i++) {
    const [x1, y1, r1, x2, y2, r2] = input[i].split(" ").map(Number);
    
    console.log(getTargetPointCount(x1, y1, r1, x2, y2, r2));
}

function getTargetPointCount(x1, y1, r1, x2, y2, r2) {
    let distancePow = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
    
    // 중심이 같고 반지름 같은 case
    if(x1 === x2 && y1 === y2 && r1 === r2) {
        return -1;
    }
    // 반지름 합이 중점간 거리보다 긴 case
    else if(distancePow > Math.pow(r1 + r2, 2)) {
        return 0;
    }
    // 원안에 원이 있지만 내접은 x case
    else if(distancePow < Math.pow(r2 - r1, 2)) {
        return 0;
    }
    // 내접 case
    else if(distancePow === Math.pow(r2 - r1, 2)) {
        return 1;
    }
    // 외접 case
    else if(distancePow === Math.pow(r1 + r2, 2)) {
        return 1;
    }
    
    else {
        return 2;
    }
}