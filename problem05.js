function waitingTime(waitingTimes, serialNumber) {
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