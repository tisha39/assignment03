function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return 'Invalid Input'
    }

    if (obj.isFFamily == true) {
        const scoreAll = obj.testScore + obj.schoolGrade + 20
        return scoreAll >= 80 ? true : false
    }

    const scoreAll = obj.testScore + obj.schoolGrade + 0
    return scoreAll >= 80 ? true : false
}
