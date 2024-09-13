function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return 'Invalid Input'
    }
    for (let singleLetter of name) {
        if (!isNaN(singleLetter)) {
            return true;
        }
    }
    return false;
}