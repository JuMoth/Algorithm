function solution(s) {
    let res = [];
    for(let c of s) console.log(s.indexOf(c));
    console.log("----------------");
    for(let c of s) console.log(s.lastIndexOf(c));
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}