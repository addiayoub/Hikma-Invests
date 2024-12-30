export const reOrder = (arr = [], srcIndex, destIndex) => {
    const reOrdered = [...arr]
    const [removed] = reOrdered.splice(srcIndex, 1)
    reOrdered.splice(destIndex, 0, removed)
    return reOrdered
}