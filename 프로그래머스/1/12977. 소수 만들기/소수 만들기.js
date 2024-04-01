function getFactor(num) {
    let factorsLen = 0;
    for(let i=1; i<=num; i++) {
        if(num%i === 0) {
            factorsLen++;
        }
    }
    return factorsLen <= 2 ? true : false;
}

function solution(nums) {
    var answer = 0;
    
    for(let i=0; i<nums.length-2; i++) {
        for(let j=i+1; j<nums.length-1; j++) {
            for(let k=j+1; k<nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if(getFactor(sum)) answer++;
            }
        }
    }
    
    return answer;
}