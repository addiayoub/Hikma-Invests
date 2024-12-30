import { getTotalOfArrayObject } from "./getTotalOfData"

export const getRow = (source, target, amount) => {
    return [source, target, amount]
}


export const _revenus = [
    { id: '###', nom: 'salaire', montant: 3000 },
    { id: '+++', nom: 'ecom', montant: 300 }
]



export const step1 = (data = []) => {
    const arr = []
    for (const r of data) {
        if (r.nom.trim() && r.montant && !isNaN(r.montant)) {
            let montant = 0
            switch (r.type) {
                case 'a':
                    montant = r.montant / 12
                    break;

                default:
                    montant = r.montant
                    break;
            }
            arr.push([r.nom, 'Budget', +montant.toFixed(2)])
        }
    }
    return arr
}





export const step2 = (data = {}) => {
    const catsData = Object.values(data)
    const arr = []
    for (const cat of catsData) {
        if (Array.isArray(cat)) {
            for (const _ of cat) {
                const total = getTotalOfArrayObject(_.data)
                if (_.title !== '' && total !== 0 && !isNaN(total)) {
                    arr.push(
                        getRow('Budget', _.title, +total.toFixed(2))
                    )
                }
            }
        }
    }

    return arr

}

export const step3 = (cats) => {
    // console.log('data: ', cats)
    const arr = []
    for (const cat of Object.values(cats)) {
        if (Array.isArray(cat)) {
            for (const _ of cat) {
                for (const __ of _.data) {
                    // console.log('data: ', __)
                    if (__.nom && __.montant && !isNaN(__.montant)) {
                        let total = 0
                        switch (__.type) {
                            case 'a':
                                total = __.montant / 12
                                break;

                            default:
                                total = __.montant
                                break;
                        }
                        arr.push([_.title, __.nom, +total.toFixed(2)])
                    }
                }
            }
        }
    }
    return arr
}