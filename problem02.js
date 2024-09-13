function sendNotification(email) {
    if (email.includes('@') === false) {
        return 'Invalid Email'
    }
    const emailSplit = email.split('@');
    const emailUser = emailSplit[0]
    const emailDomain = emailSplit.slice(-1)
    return (`${emailUser} sent you an email from ${emailDomain}`)
}