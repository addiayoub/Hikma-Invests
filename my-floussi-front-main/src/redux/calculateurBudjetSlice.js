import { createSlice } from '@reduxjs/toolkit'
import uuid from 'react-uuid';

export const calclulateurBudjetSlice = createSlice({
    name: 'cb',
    initialState: {
        revenus: [
            {
                id: uuid(),
                nom: 'Salaire et autres revenus',
                montant: 0,
                type: 'm'
            },
            {
                id: uuid(),
                nom: 'Pensions',
                montant: 0,
                type: 'm'
            },
            {
                id: uuid(),
                nom: 'Loyers/ Intérêts / Revenus du capital',
                montant: 0,
                type: 'm'
            },
            {
                id: uuid(),
                nom: 'Autres Revenus',
                montant: 0,
                type: 'm'
            }
        ],
        investissements: [
            {
                id: uuid(),
                title: 'Marche financiers',

                data: [
                    {
                        id: uuid(),
                        nom: 'Epargne',
                        montant: 0,
                        type: 'm'
                    },
                    {
                        id: uuid(),
                        nom: 'Bourse',
                        montant: 0,
                        type: 'm'
                    },
                    {
                        id: uuid(),
                        nom: 'Assurance',
                        montant: 0,
                        type: 'm'
                    }
                ],
            },
            {
                id: uuid(),
                title: 'Autres investissements',

                data: [
                    {
                        id: uuid(),
                        nom: 'Daret',
                        montant: 0,
                        type: 'm'
                    }
                ]
            },


        ],

        depences: [

            {
                id: uuid(),
                title: 'Vie quotidienne',

                data: [
                    {
                        id: uuid(),
                        nom: 'Courses / Alimentation',
                        montant: 0,
                        type: 'm'
                    },
                    {
                        id: uuid(),
                        nom: 'Loyer et charges',
                        montant: 0,
                        type: 'm'
                    },
                    {
                        id: uuid(),
                        nom: 'Electricité/ Eau',
                        montant: 0,
                        type: 'm'
                    },
                    {
                        id: uuid(),
                        nom: 'Téléphone / Internet ',
                        montant: 0,
                        type: 'm'
                    }
                ]
            },
            {
                id: uuid(),
                title: 'Habillement',

                data: [
                    {
                        id: uuid(),
                        nom: 'Vêtements',
                        montant: 0,
                        type: 'm'
                    },

                ]
            },
            {
                id: uuid(),
                title: 'Frais financiers',

                data: [
                    {
                        id: uuid(),
                        nom: "Remboursement d'emprunt immobilier",
                        montant: 0,
                        type: 'm'
                    },
                    {
                        id: uuid(),
                        nom: "Remboursement d'emprunt immobilier",
                        montant: 0,
                        type: 'm'
                    },
                    {
                        id: uuid(),
                        nom: "Remboursements de crédits ",
                        montant: 0,
                        type: 'm'
                    },
                    {
                        id: uuid(),
                        nom: "Autres assurances",
                        montant: 0,
                        type: 'm'
                    }
                ]
            },
            {
                id: uuid(),
                title: 'Loisirs et sport',

                data: [
                    {
                        id: uuid(),
                        nom: "Sorties Resto",
                        montant: 0,
                        type: 'm'
                    },
                    {
                        id: uuid(),
                        nom: "Vacances",
                        montant: 0,
                        type: 'm'
                    },
                    {
                        id: uuid(),
                        nom: "Salles de sport",
                        montant: 0,
                        type: 'm'
                    }
                ]
            },
            {
                id: uuid(),
                title: 'Enfants',

                data: [
                    {
                        id: uuid(),
                        nom: "Scolarité",
                        montant: 0,
                        type: 'm'
                    },
                    {
                        id: uuid(),
                        nom: "Activité",
                        montant: 0,
                        type: 'm'
                    },
                    {
                        id: uuid(),
                        nom: "Autres frais",
                        montant: 0,
                        type: 'm'
                    }
                ]
            },
            {
                id: uuid(),
                title: 'Transports',

                data: [
                    {
                        id: uuid(),
                        nom: "Voiture",
                        montant: 0,
                        type: 'm'
                    },
                    {
                        id: uuid(),
                        nom: "Autres",
                        montant: 0,
                        type: 'm'
                    }
                ]
            },
        ]

    },
    reducers: {
        addRevenu(state, action) {
            state.revenus.push(action.payload)
        },
        editRevenu(state, action) {
            const { id, nom, montant, type } = action.payload
            const revenuIndex = state.revenus.findIndex(r => r.id === id)
            state.revenus[revenuIndex].nom = nom
            state.revenus[revenuIndex].montant = montant
            state.revenus[revenuIndex].type = type
        },
        deleteRevenu(state, action) {
            const { id } = action.payload
            const revenuIndex = state.revenus.findIndex(r => r.id === id)
            state.revenus.splice(revenuIndex, 1)
        },
        editRevenuGroupItems(state, action) {
            state.revenus = action.payload
        }
        ,
        setInvestissements(state, action) {
            state.investissements = action.payload
        },

        addInvitissement(state, action) {
            const { groupId, id, nom, montant, type } = action.payload
            const groupIndex = state.investissements.findIndex(g => g.id === groupId)
            state.investissements[groupIndex].data.push({ id, nom, montant, type })
        },
        deleteInvistissements(state, action) {
            const { groupId, id, } = action.payload
            const groupIndex = state.investissements.findIndex(g => g.id === groupId)
            const itemIndex = state.investissements[groupIndex].data.findIndex(inv => inv.id === id)
            state.investissements[groupIndex].data.splice(itemIndex, 1)
        },
        editInvistissment(state, action) {
            const { groupId, id, nom, montant, type } = action.payload
            const groupIndex = state.investissements.findIndex(g => g.id === groupId)
            const itemIndex = state.investissements[groupIndex].data.findIndex(inv => inv.id === id)
            state.investissements[groupIndex].data[itemIndex].nom = nom
            state.investissements[groupIndex].data[itemIndex].montant = montant
            state.investissements[groupIndex].data[itemIndex].type = type
        },

        editInvistissmentElementData(state, action) {
            const { groupIndex, data } = action.payload
            state.investissements[groupIndex].data = data
        },


        addGroup(state) {
            state.investissements.push(
                {
                    title: '',
                    id: uuid(),
                    data: [
                        { id: uuid(), nom: '', montant: 0, type: 'm' },
                    ]
                }
            )

        },

        setDepences(state, action) {
            state.depences = action.payload
        },

        addDepence(state, action) {
            const { groupId, id, nom, montant, type } = action.payload
            const groupIndex = state.depences.findIndex(g => g.id === groupId)
            state.depences[groupIndex].data.push({ id, nom, montant, type })
        },
        deleteDepences(state, action) {
            const { groupId, id, } = action.payload
            const groupIndex = state.depences.findIndex(g => g.id === groupId)
            const itemIndex = state.depences[groupIndex].data.findIndex(inv => inv.id === id)
            state.depences[groupIndex].data.splice(itemIndex, 1)
        },
        editDepence(state, action) {
            const { groupId, id, nom, montant, type } = action.payload
            const groupIndex = state.depences.findIndex(g => g.id === groupId)
            const itemIndex = state.depences[groupIndex].data.findIndex(inv => inv.id === id)
            state.depences[groupIndex].data[itemIndex].nom = nom
            state.depences[groupIndex].data[itemIndex].montant = montant
            state.depences[groupIndex].data[itemIndex].type = type
        },
        addDepencesGroup(state) {
            state.depences.push(
                {
                    title: 'Nouveau group',
                    id: uuid(),
                    data: [
                        { id: uuid(), nom: '', montant: 0, type: 'm' }
                    ]
                }
            )

        },
        editDepencesElementData(state, action) {
            const { groupIndex, data } = action.payload
            state.depences[groupIndex].data = data
        },

        changeGroupTitle(state, action) {
            const { groupId, type, title } = action.payload
            // console.log(groupId)
            const groupIndex = state[type].findIndex(g => g.id === groupId)
            if (title === '') {
                state[type][groupIndex].title = 'Group sans nom'
                return
            }
            state[type][groupIndex].title = title
        },

        deleteGroup(state, action) {
            const { groupId, type } = action.payload
            const groupIndex = state[type].findIndex(g => g.id === groupId)
            state[type].splice(groupIndex, 1)
        }

    },
})

// Action creators are generated for each case reducer function
export const { addRevenu, editRevenu, deleteRevenu, addInvitissement, editInvistissment, deleteInvistissements, addGroup, addDepence, deleteDepences, editDepence, addDepencesGroup, changeGroupTitle, deleteGroup, setInvestissements, setDepences, editInvistissmentElementData, editRevenuGroupItems, editDepencesElementData } = calclulateurBudjetSlice.actions

export default calclulateurBudjetSlice.reducer