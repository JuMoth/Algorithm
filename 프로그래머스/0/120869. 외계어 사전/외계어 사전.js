function solution(spell, dic) {
    for (let word of dic) {
        const spellSet = new Set(spell);
        let found = true;
        for (let char of word) {
            if (!spellSet.has(char)) {
                found = false;
                break;
            }
            spellSet.delete(char);
        }
        if (found && spellSet.size === 0) {
            return 1;
        }
    }
    return 2;
}