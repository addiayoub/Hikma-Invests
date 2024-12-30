import { getTotalOfArrayObject } from "../sankeyData/getTotalOfData"
import { getTotalOfCategory } from "../sankeyData/sankeyCalucaltors"

export const sunburstRevenuData = (revenus) => {
    const children = []
    revenus.forEach((r) => {
        if (r.montant > 0) {
            children.push({
                name: r.nom,
                value: r.montant,

            })
        }
    })
    const totalRev = getTotalOfArrayObject(revenus)
    return [{
        name: "Revenus",
        children,
        value: totalRev
    }]
}



export const sunBuerstInvestDepData = (group, groupeName) => {
    const children = []
    group.forEach((g) => {
        const subChildren = []

        const totalOfGroup = getTotalOfArrayObject(g.data)

        if (totalOfGroup > 0) {

            g.data.forEach(d => {
                if (d.montant > 0) {
                    subChildren.push({
                        name: d.nom,
                        value: d.montant
                    })
                }
            })

            children.push({
                name: g.title,
                value: totalOfGroup,
                children: subChildren
            })
        }
    })
    const totalGrp = getTotalOfCategory(group)
    return [{
        name: groupeName,
        children,
        value: totalGrp
    }]
}