// =W26*(1-$B$13%)
export const pmvAutreNetteCalc = (pmvAutreLast, txImpositionAutre) => {
    return pmvAutreLast * (1 - txImpositionAutre / 100)
}

export const pmvAutreCalc = (autreFisrt, autre, versAutreCumule, investAutre) => {
    return autre - autreFisrt + investAutre - versAutreCumule
}


export const autreCalc = (prevAutre, rendAutre, txInflastion) => {
    return prevAutre * (1 + (rendAutre / 100)) / (1 + (txInflastion / 100))

}

export const autreFisrtCalc = (patrActuel, repBourseFisrt) => patrActuel - repBourseFisrt

export const versAutreCumuleCalc = (versAutre, prevVersAutreCumule) => versAutre + prevVersAutreCumule

export const versAutreCalc = (invAnnuel, versBourse) => invAnnuel - versBourse


// =U25 * (1 + ($B$12 %)) / (1 + $B$16 %) + (1 - $B$7) * O25
export const investAutreCalc = (prevInvestAutre, rendAutre, txInflation, repPatrimoine, invAnnuel) => {
    return prevInvestAutre * (1 + (rendAutre / 100)) / (1 + (txInflation / 100)) + (1 - (repPatrimoine / 100)) * invAnnuel
}


export const investAutreFisrtCalc = (versAutreFisrt) => {
    return versAutreFisrt
}