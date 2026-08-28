function solution(skill, skill_trees) {
    let answer = 0;
    
    for(let tree of skill_trees) {
        let learned = tree
            .split('')
            .filter(s => skill.includes(s))
            .join('');
        
        if(skill.startsWith(learned)) {
            answer++;
        }
    }
    return answer;
}