function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0) {
        return "Invalid Input"
    }
    if (expenses > income) {
        return "Invalid Input"
    }
    const lavTaka = income - expenses
    const vatTaka = lavTaka * 0.20
    return (vatTaka)
}

function sendNotification(email) {
    if (email.includes('@') === false) {
        return 'Invalid Email'
    }
    const emailSplit = email.split('@');
    const emailUser = emailSplit[0]
    const emailDomain = emailSplit.slice(-1)
    return (`${emailUser} sent you an email from ${emailDomain}`)
}

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

function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return 'Invalid Input'
    }
    if (obj.testScore <= 50 || obj.schoolGrade <= 30 || obj.isFFamily === 'boolean') {

        if (obj.isFFamily == true) {
            const scoreAll = obj.testScore + obj.schoolGrade + 20
            return scoreAll >= 80 ? true : false
        }

        const scoreAll = obj.testScore + obj.schoolGrade + 0
        return scoreAll >= 80 ? true : false
    }
    else {
        return 'Invalid Input'
    }
}


function waitingTime(waitingTimes ,serialNumber) {
    if (Array.isArray(waitingTimes) === false || typeof serialNumber !== 'number') {
        return 'Invalid Input'
    }
    let sumOfArray = 0;
    for (singleValue of waitingTimes) {
        sumOfArray += singleValue
    }
    const avargeOfArray = Math.round(sumOfArray / waitingTimes.length)
    const otherPeople = ((serialNumber - 1) - waitingTimes.length)
    const countTime = otherPeople * avargeOfArray
    return (countTime)
}
