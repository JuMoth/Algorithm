function solution(arr)
{
    let numArr = [];

    for(let i of arr) {
        if(numArr.at(-1) === i) {
            continue;
        } else {
            numArr.push(i);
        }
    }
    return numArr;
}