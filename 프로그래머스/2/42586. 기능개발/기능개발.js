function solution(progresses, speeds) {
    let answer = [];
    let days = progresses.map((progress, i) => {
        return Math.ceil((100 - progress) / speeds[i]);
    });
    console.log(days);
    let deployDay = days[0];
    let count = 1;
    
    for(let i=1; i<days.length; i++) {
        if(days[i] <= deployDay) {
            count++;
        } else {
            answer.push(count);
            deployDay = days[i];
            count = 1;
        }
    }
    
    answer.push(count);
    return answer;
}