function solution(want, number, discount) {
    let result = 0;
    
    let wantObj = {};
    
    want.forEach((item, index) => {
        wantObj[item] = number[index];
    });
    
    for(let i=0; i<=discount.length-10; i++) {
        let discountObj = {};
    
        for(let j=i; j<i+10; j++) {
            const item = discount[j];
            discountObj[item] = (discountObj[item] || 0) + 1;
        }
    
        let isPossible = true;
    
        for(let item of want) {
            if(discountObj[item] !== wantObj[item]) {
                isPossible = false;
                break;
            }
        }
    
        if(isPossible) {
            result++;
        }
    }
    return result;
}