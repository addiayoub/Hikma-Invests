const ACTIONS = 1.80
const OBLIGATAIRES = 0.90
const MONETAIRES = 0.30
const QUEF = 1.2
export const fraisMoyensPourcentageCalc = (type) => QUEF * (type / 100)

export const fraisRobotAdvisorPourcentageCalc = (type) => QUEF * ((type / 100) / 3)


export const fraisMoyensCalc = (fraisMoyensPourcentage, sommePlacee) => parseInt(fraisMoyensPourcentage * sommePlacee / 12)

export const fraisRobotAdvisorCalc = (fraisRobotAdvisorPourcentage, sommePlacee) => parseInt(fraisRobotAdvisorPourcentage * sommePlacee / 12)


export const economieAnnuelleCalc = (fraisMoyens, fraisRoboAdvisor) => parseInt((fraisMoyens - fraisRoboAdvisor) * 12)
export const economieParAnnesCalc = (economieAnnuelle, nbrAnnes) => parseInt(economieAnnuelle * nbrAnnes)