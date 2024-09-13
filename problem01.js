
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
const result= calculateTax(10000,3000)

console.log(result)