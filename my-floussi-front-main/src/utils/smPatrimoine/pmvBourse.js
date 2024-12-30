// =W26*(1-$B$13%)
export const pmvBourseNetteCalc = (pmvBourseLast, txImpositionBourse) => {
    return pmvBourseLast * (1 - txImpositionBourse / 100)
}


export const pmvBourseCalc = (repBourseFirst, repBourse, investBourse, versBourseCumule) => {
    return repBourse - repBourseFirst + investBourse - versBourseCumule
}

export const repBourseCalc = (repPatrimoine, pActuel, prevRepartistionBourse, rendBourse, txInflation, init = false) => {

    if (init) {
        return pActuel * repPatrimoine / 100
    }

    return prevRepartistionBourse * (1 + rendBourse / 100) / (1 + txInflation / 100)

}

export const versBourseCumuleCalc = (versBourse, prevBoursCumle, init = false) => {
    if (init) {
        return versBourse
    }
    return prevBoursCumle + versBourse
}

export const versBourseCalc = (invAnnuel, repInvestissement) => {
    return invAnnuel * (repInvestissement / 100)
}

export const investBourseCalc = (versBourse, versement, repPatrimoine, prevInvestBourse, rendBourse, txInflation, init = false) => {
    if (init) return versBourse
    return prevInvestBourse * (1 + (rendBourse / 100)) / (1 + (txInflation / 100)) + (repPatrimoine / 100) * versement
}





// export const




export const plusValueNetteCalc = (pmvBourse, pmvAutre, txImpositionBourse, txImpositionAutre) => {
    return (pmvBourse * 1 - (txImpositionBourse / 100)) + (pmvAutre * 1 - (txImpositionAutre / 100))
}