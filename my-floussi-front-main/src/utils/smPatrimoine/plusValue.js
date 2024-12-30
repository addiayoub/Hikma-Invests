export const plusValueNetteCalc = (pmvBourseNette, pmvAutreNette) => {
    return pmvBourseNette + pmvAutreNette
}


export const plusValueBrutteCalc = (valeurFuture, pActuel, versCumuleLast) => {
    return valeurFuture - pActuel - versCumuleLast
}
