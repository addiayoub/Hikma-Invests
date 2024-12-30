
export const valeurNetteCalc = (pActuel, versementAcumuleLast, pmvBourseNette, pmvAutreNette) => {
       return pActuel + versementAcumuleLast + pmvBourseNette + pmvAutreNette
}
export const revenuMensuelCalc = (txRetrait, valeurNette) => {
       return valeurNette * (txRetrait / 100) / 12
}


export const valeurFutureCalc = (pActuel, pmvBourseLast, pmvAutreLast, versCumuleLast) => {

       return pActuel + pmvBourseLast + pmvAutreLast + versCumuleLast

}