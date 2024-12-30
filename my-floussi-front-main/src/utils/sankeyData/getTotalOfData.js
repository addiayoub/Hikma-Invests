export const removeNonNumericProperties = (obj) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] !== 'number') {
            delete obj[key];
        }
    }
}


export const getTotal = (obj) => {
    const _obj = { ...obj }
    let total = 0
    switch (_obj.type) {
        case 'a':
            total = _obj.montant / 12
            break;

        default:
            total = _obj.montant
            break;
    }
    return +total.toFixed(2)
}


export const getTotalOfArrayObject = (arr = []) => {
    let total = 0
    for (const obj of arr) {
        total += getTotal(obj)
    }
    return total
}

export const getTotalAmountOfCategory = (arr = []) => {
    let total = 0
    for (const obj of arr) {
        total += getTotalOfArrayObject(obj.data)
    }
    return total
}