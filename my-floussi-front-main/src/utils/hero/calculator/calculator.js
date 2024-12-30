// =$F$21 * (((1 + $F$17) ^ ($E25 * 52) - 1) / $F$17)

export const TAUX_RENDEMENT_MOYEN = 8
export const FDG_ANUUEL = 0.6
export const FRAIS_MENSUEL_ABONNEMENT = 200

export const TAUX_RENDEMENT_MOYEN_OPVCM = 7
export const FDG_ANUUEL_OPVCM = 2.40
export const FRAIS_MENSUEL_ABONNEMENT_OPVCM = 0

export const TAUX_RENDEMENT_MOYEN_COMPTE_CARNET = 2.6
export const FDG_ANUUEL_COMPTE_CARNET = 0.10
export const FRAIS_MENSUEL_ABONNEMENT_COMPTE_CARNET = 0

export const fraisCalc = (investNetFraisTotal, tauxNetHebdo, ans) => {
    const res = (investNetFraisTotal * (((1 + tauxNetHebdo) ** (ans * 52) - 1) / tauxNetHebdo))
    if (res < 0) {
        return 0
    }
    return res

}


// montantInvestSemaine - fraisMensuelAbonnement / 4

export const investNetFraisTotalCalc = (montantInvestSemaine, fraisMensuelAbonnement) => (montantInvestSemaine - fraisMensuelAbonnement / 4)
// =(1+F16)^(1/52)-1
// = (1 + G16) ^ (1 / 52) - 1

export const tauxNetHebdoCalc = (txRendementMoyen, FDGAnnuel) => {
    const txNet = txRendementMoyen - FDGAnnuel
    return (1 + (txNet / 100)) ** (1 / 52) - 1
}


export const investNetFraisTotal_OPVCM_Calc = (montantInvestSemaine) => {
    const fraisEntree = 10 / 100 * montantInvestSemaine
    return montantInvestSemaine - fraisEntree
}


export const investNetFraisTotal_CompteCarnet_Calc = (investParSemaine) => investParSemaine 