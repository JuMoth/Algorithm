function solution(a, b, n) {
    // let cola = [];
    // for(let i=0; ; i++) {
    //     cola.push(Math.floor(n/a) * b);
    //     n = (n%a) + (Math.floor(n/a));
    //     if(n<a) break;
    // }
    // let sum = 0;
    // for(let i of cola) sum+=i;
    // return sum;
    
    let answer = 0;

    while(n>=a) { 
        answer += Math.floor(n/a)*b;
        n = (Math.floor(n/a)*b)+(n%a);
    }
    return answer;
}