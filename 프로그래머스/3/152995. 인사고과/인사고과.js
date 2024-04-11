function solution(scores) {
    // [인센티브를 받지 못할 조건]
    // 만약 어떤 사원이 다른 임의의 사원보다 두 점수가 모두 낮은 경우
    
    // [인센티브 지급 조건]
    // 두 점수의 합이 높은 순으로 석차를 내어 석차에 따라 인센티브가 차등 지급
    
    // ex) Scores
    // [a, b] : a = 근무 태도 점수, b = 동료 평가 점수
    // [[2,2],[1,4],[3,2],[3,2],[2,1]]
    
    // 내림차순 Sorting by 근무 태도 점수
    // a, b는 비교되는 두 배열의 요소
    // sort 함수는 요소를 비교해서 정렬 순서를 결정하는 함수
    // a[0] === b[0], 요소가 같은지 비교
    // 같으면, a[1] - b[1]을 통해서 두 번째 요소를 오름차순으로 정렬
    // 다르면, b[0] - a[0]을 통해서 첫 번째 요소를 내림차순으로 정렬
    
    const wanhoScore = scores[0];
    scores.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
    
    let answer = 1;
    let maxScore = 0;
    const wanhoScoreSum = wanhoScore[0] + wanhoScore[1];
    
    for(let score of scores) {
        if(score[1] < maxScore) {
            if(score === wanhoScore) {
                return -1;
            }
        } else {
            maxScore = Math.max(maxScore, score[1]);
            if(score[0] + score[1] > wanhoScoreSum) {
                answer++;
            }
        }
    }
    return answer;
}