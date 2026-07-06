function solution(name, yearning, photo) {
    const score = {};

    for (let i=0; i<name.length; i++) {
        score[name[i]] = yearning[i];
    }

    return photo.map(people =>
        people.reduce((sum, person) => sum+(score[person] || 0), 0)
    );
}