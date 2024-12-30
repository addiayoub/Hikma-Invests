
import uuid from 'react-uuid';
import Calendar from '../svgs/Calendar';
import House from '../svgs/House';
import Key from '../svgs/Key';

export const questions = [
    {
        id: uuid(),
        name: 'PARLONS DE VOTRE PROJET',
        questions: [
            {
                id: uuid(),
                question: "Quel est votre projet d'investissement ?",
                instruction: "",
                choices: [
                    {
                        id: uuid(),
                        name: 'Faire fructifier mon épargne',

                    },
                    {
                        id: uuid(),
                        name: 'Epargner en cas de coup dur',

                    },
                    {
                        id: uuid(),
                        name: 'Préparer un achat important',

                    },
                    {
                        id: uuid(),
                        name: "Prévoir ma retraite",

                    },
                    {
                        id: uuid(),
                        name: "Transmettre mon patrimoine",

                    },
                    {
                        id: uuid(),
                        name: "Ouvrir un compte enfant",

                    },
                    {
                        id: uuid(),
                        name: "Optimiser ma trésorerie professionnelle",

                    },

                ]
            },

            {
                id: uuid(),
                question: 'Quel montant souhaitez-vous placer chez Yomoni ?',
                instruction: "",
                message: "Avec Yomoni, votre épargne n'est pas bloquée : vous pouvez continuer d'investir dès votre compte ouvert et retirer à tout moment.",
                error: "La valeur de votre montant de départ doit être comprise entre 15 000  et 10 000 000 MAD",
                inputs: [
                    {
                        id: uuid(),
                        label: 'MAD',
                        value: 0
                    },

                ],
            },

            {
                id: uuid(),
                question: "Quel montant régulier souhaitez-vous placer chaque mois ?",
                instruction: "Placer de l'argent tous les mois pourrait faire une grande différence dans quelques années.55% de nos clients ont fait ce choix et placent en moyenne 200 € par mois.",

                message: "Les versements sont modulables : placer le montant que vous souhaitez, à la fréquence que vous souhaitez. Ils sont modifiables à tout moment, et toujours sans frais !",
                inputs: [
                    {
                        id: uuid(),
                        label: 'MAD',
                        value: 0
                    },

                ],

            },

            {
                id: uuid(),
                question: "Dans combien de temps souhaitez-vous profiter de cet investissement ?",
                instruction: "",

                message: "Cette information nous permet de vous proposer une simulation en accord avec votre horizon d'investissement. Votre argent pourra être débloqué avant sans difficulté et sans frais.",
                inputs: [
                    {
                        id: uuid(),
                        label: 'MAD',
                        value: 0
                    },

                ],

            },
            {
                id: uuid(),
                question: "Êtes-vous résident fiscal français ?",
                instruction: `Si vous payez des impôts sur le revenu en France, DOM inclus, vous êtes résident fiscal français.`,
                binaryChoices: [
                    {
                        id: uuid(),
                        name: "Non",
                        status: false,
                        error: "Yomoni ne propose pas encore de contrat personne morale pour les non-résidents fiscaux français. Cependant, vous pouvez contacter l'un de nos conseillers pour échanger sur votre situation."
                    },
                    {
                        id: uuid(),
                        name: 'Oui',
                        status: true,
                        error: null
                    },


                ],
            },

            {
                id: uuid(),
                question: "Quelle est la valeur du patrimoine immobilier NET de la structure ?",
                instruction: "Additionnez la valeur des biens puis déduisez le montant du crédit qu'il reste à rembourser.Une estimation nous convient.",

                message: "",
                error: "",
                inputs: [
                    {
                        id: uuid(),
                        label: 'MAD',
                        value: 0
                    },

                ],

            },
            {
                id: uuid(),
                question: "Quel est le montant estimé du patrimoine financier de la structure ?",
                instruction: "Additionnez vos avoirs financiers.Une estimation suffit.",
                message: "",
                error: "",
                inputs: [
                    {
                        id: uuid(),
                        label: 'MAD',
                        value: 0
                    },

                ],

            },


            {
                id: uuid(),
                question: "Pourriez-vous avoir besoin de toute l'épargne placée chez Yomoni d'ici 2 ans ?",
                instruction: "",
                choices: [
                    {
                        id: uuid(),
                        name: 'Certainement pas',

                    },
                    {
                        id: uuid(),
                        name: 'Probablement pas',

                    },
                    {
                        id: uuid(),
                        name: 'Probablement'

                    },
                    {
                        id: uuid(),
                        name: "Très probablement",

                    },


                ]
            },


            {
                id: uuid(),
                question: "Pourriez-vous avoir besoin de la moitié de votre investissement avant 8 ans ?",
                instruction: "",
                choices: [
                    {
                        id: uuid(),
                        name: 'Certainement pas',

                    },
                    {
                        id: uuid(),
                        name: 'Probablement pas',

                    },
                    {
                        id: uuid(),
                        name: 'Probablement'

                    },
                    {
                        id: uuid(),
                        name: "Très probablement",

                    },


                ]
            },


            {
                id: uuid(),
                question: "Avez-vous déjà placé de l'argent sur un contrat d'assurance-vie,un compte- titres ou un plan d'épargne en actions (PEA) ?",
                instruction: `Cette question nous permet d'en savoir plus sur vos expériences précédentes en matière d'investissement.`,
                binaryChoices: [
                    {
                        id: uuid(),
                        name: "Non",
                        status: false,
                        error: null
                    },
                    {
                        id: uuid(),
                        name: 'Oui',
                        status: true,
                        error: null
                    },


                ],
            },


            {
                id: uuid(),
                question: "Une perspective de gain élevé implique un risque de perte en capital fort",
                instruction: "L'affirmation ci-dessus vous semble-t-elle vraie ?",
                prospects: [
                    {
                        id: uuid(),
                        name: 'Vrai',
                        type: 0,
                        message: {
                            id: uuid(),
                            title: 'Exact',
                            body: "Plus vous cherchez de hauts rendements et plus vous devez prendre des risques avec vos placements."
                        }
                    },
                    {
                        id: uuid(),
                        name: 'Faux',
                        type: 1,
                        message: {
                            id: uuid(),
                            title: 'Mauvaise réponse',
                            body: " En fait, les placements financiers, c'est comme le football, plus vous jouez l'attaque et plus vous vous exposez. Plus vous visez haut, plus vous risquez gros."
                        }
                    },
                    {
                        id: uuid(),
                        name: 'Je ne sais pas',
                        type: 2,
                        message: {
                            id: uuid(),
                            title: 'Réponse ',
                            body: "En fait, les placements financiers, c'est comme le football, plus vous jouez l'attaque et plus vous vous exposez. Plus vous visez haut, plus vous risquez gros."
                        }
                    }
                ]

            },




            {
                id: uuid(),
                question: "Un ETF est un fonds à capital garanti",
                instruction: "L'affirmation ci-dessus vous semble-t-elle vraie ?",
                prospects: [
                    {
                        id: uuid(),
                        name: 'Vrai',
                        type: 1,
                        message: {
                            id: uuid(),
                            title: 'Mauvaise réponse',
                            body: "Un ETF est un fonds dont l'objectif est de répliquer un indice boursier. Il peut être composé de divers actifs (actions, obligations...). Suivant l'indice qu'il cherche à répliquer, l'ETF est plus ou moins risqué, le capital n'est donc pas garanti."
                        }
                    },
                    {
                        id: uuid(),
                        name: 'Faux',
                        type: 0,
                        message: {
                            id: uuid(),
                            title: 'Bonne réponse',
                            body: "un ETF est un fonds qui réplique un indice boursier. Il peut donc varier à la hausse comme à la baisse. Il ne s'agit donc pas d'un fonds à capital garanti."
                        }
                    },
                    {
                        id: uuid(),
                        name: 'Je ne sais pas',
                        type: 2,
                        message: {
                            id: uuid(),
                            title: 'Réponse ',
                            body: "Un ETF est un fonds dont l'objectif est de répliquer un indice boursier. Il peut être composé de divers actifs (actions, obligations...). Suivant l'indice qu'il cherche à répliquer, l'ETF est plus ou moins risqué, le capital n'est donc pas garanti."
                        }
                    }
                ]

            },


            {
                id: uuid(),
                question: "En déléguant la gestion de mon portefeuille à une société de gestion, je renonce à prendre moi- même des décisions d'investissement sur celui-ci",
                instruction: "L'affirmation ci-dessus vous semble-t-elle vraie ?",
                prospects: [
                    {
                        id: uuid(),
                        name: 'Vrai',
                        type: 0,
                        message: {
                            id: uuid(),
                            title: 'Bien joué',
                            body: "Vous avez compris le principe ! Nos gérants gèrent votre portefeuille à votre place."
                        }
                    },
                    {
                        id: uuid(),
                        name: 'Faux',
                        type: 1,
                        message: {
                            id: uuid(),
                            title: 'Mauvaise réponse',
                            body: "Confier votre portefeuille à Yomoni revient à laisser les manettes à nos gérants. C'est à eux que revient la charge de concevoir vos allocations, de les investir et de réaliser les arbitrages dans votre portefeuille. Les dépôts et retraits restent à votre main."
                        }
                    },
                    {
                        id: uuid(),
                        name: 'Je ne sais pas',
                        type: 2,
                        message: {
                            id: uuid(),
                            title: 'Réponse ',
                            body: "Confier votre portefeuille à Yomoni revient à laisser les manettes à nos gérants. C'est à eux que revient la charge de concevoir vos allocations, de les investir et de réaliser les arbitrages dans votre portefeuille. Les dépôts et retraits restent à votre main."
                        }
                    }
                ]

            },


            {
                id: uuid(),
                question: "Avez-vous déjà subi des pertes sur vos placements financiers ?",
                instruction: "",
                choices: [
                    {
                        id: uuid(),
                        name: "Non, je n'ai jamais subi de perte sur mes placements financiers",

                    },
                    {
                        id: uuid(),
                        name: 'Oui, de 10% maximum',

                    },
                    {
                        id: uuid(),
                        name: 'Oui, de 20% maximum'

                    },
                    {
                        id: uuid(),
                        name: "Oui, de plus de 20%",

                    },


                ]
            },

            {
                id: uuid(),
                question: "Quel rapport gains / pertes êtes vous prêt à accepter en investissant 10 000 € sur 5 ans ?",
                instruction: "Il n'y a pas de bonne ou de mauvaise réponse. Les montants proposés nous permettent de mieux comprendre votre attitude face au risque. Ils ne sont pas nécessairement représentatifs de la réalité.",
                choices: [
                    {
                        id: uuid(),
                        name: "Gain potentiel 5 000 € / Perte potentielle 2 000 €",

                    },
                    {
                        id: uuid(),
                        name: 'Gain potentiel 2 000 € / Perte potentielle 1 000 €',

                    },
                    {
                        id: uuid(),
                        name: 'Gain potentiel 1 000 € / Perte potentielle 400 €'

                    },
                    {
                        id: uuid(),
                        name: "Gain potentiel 500 € / Perte potentielle 0 €",

                    },


                ]
            },

            {
                id: uuid(),
                question: "Quel rapport gains / pertes êtes vous prêt à accepter en investissant sur 10 ans ?",
                instruction: "Là encore, nous cherchons à comprendre votre attitude face au risque.",
                choices: [
                    {
                        id: uuid(),
                        name: "Avec une espérance de gain final de 20%, mais avec un risque de perte de 5%",

                    },
                    {
                        id: uuid(),
                        name: 'Avec une espérance de gain final de 30%, mais avec un risque de perte de 10%',

                    },
                    {
                        id: uuid(),
                        name: 'Avec une espérance de gain final de 50%, mais avec un risque de perte de 15%'

                    },
                    {
                        id: uuid(),
                        name: "Avec une espérance de gain final de 70%, mais avec un risque de perte supérieur à 15%",

                    },


                ]
            },

            {
                id: uuid(),
                question: "Si votre investissement perd 10% de sa valeur en 3 mois. Que faites-vous ?",
                instruction: "Un dernier effort, votre comportement pendant une crise nous permet de définir votre profil.",
                choices: [
                    {
                        id: uuid(),
                        name: "Je réinvestis pour profiter de cette opportunité",

                    },
                    {
                        id: uuid(),
                        name: 'Je patiente sans paniquer',

                    },
                    {
                        id: uuid(),
                        name: 'Je vends une partie pour limiter mes pertes potentielles'

                    },
                    {
                        id: uuid(),
                        name: "Je vends tout",

                    },
                    {
                        id: uuid(),
                        name: "Je ne sais pas",

                    },


                ]
            },
        ]
    },


    // {
    //     id: uuid(),
    //     name: 'Situation professionnelle',
    //     questions: [
    //         {
    //             id: uuid(),
    //             question: 'Quelle est votre situation professionnelle ?',
    //             instruction: "Votre capacité d'épargne diffère selon votre situation professionnelle",
    //             choices: [
    //                 {
    //                     id: uuid(),
    //                     name: "Fonctionnaire d'État",

    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: "Indépendant-e/Libéral-e",

    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: "Retraité-e",

    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: "Étudiant-e",

    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: 'Salarié'
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: "En recherche d'emploi"
    //                 }

    //             ]
    //         },
    //         {
    //             id: uuid(),
    //             question: 'Quels sont les revenus de votre foyer ?',
    //             instruction: 'Le montant des revenus de votre foyer nous aide à construire une allocation personnalisée.',
    //             radioStyleChoices: [
    //                 {
    //                     id: uuid(),
    //                     name: 'Revenus récurrents',

    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: 'Revenus non récurrents'
    //                 }
    //             ],
    //             inputs: [
    //                 {
    //                     id: uuid(),
    //                     label: 'Revenu net annuel :',
    //                     value: 0
    //                 },
    //                 {
    //                     id: uuid(),
    //                     label: 'Revenu de votre conjoint(e): ',
    //                     value: 0
    //                 },

    //             ],
    //             message: {
    //                 id: uuid(),
    //                 title: '',
    //                 body: `Votre revenu net annuel figure en général sur votre contrat de travail. Le cas échéant, ajoutez-y 
    //             vos revenus fonciers, vos pensions ou vos autres revenus.`
    //             }
    //         },
    //     ],

    // },


    // {
    //     id: uuid(),
    //     name: 'Situation patrimoniale',
    //     questions: [
    //         {
    //             id: uuid(),
    //             question: 'Êtes-vous propriétaire ou locataire ?',
    //             instruction: "Cette information nous aide à construire une allocation personnalisée",
    //             iconChoices: [
    //                 {
    //                     id: uuid(),
    //                     name: 'Propriétaire',
    //                     icon: Key
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: 'Locataire',
    //                     icon: Calendar
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: 'Hébergé(e)',
    //                     icon: House
    //                 },

    //             ]
    //         },
    //         {
    //             id: uuid(),
    //             question: "Quelle est la valeur de votre patrimoine immobilier ?",
    //             instruction: `Indiquez la valeur approximative des biens immobiliers de votre foyer, 
    //             sans déduire vos emprunts. Cette information
    //                     nous aide à construire une allocation personnalisée.`,
    //             choices: [
    //                 {
    //                     id: uuid(),
    //                     name: 'Moins de 250 000 MAD',
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: "De 250 000 MAD à 500 000 MAD"
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: "De 250 000 MAD à 1 000 000 MAD"
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: "De 1 000 000 MAD À 2 000 000 MAD"
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: "2 000 000 MAD et plus"
    //                 }
    //             ]
    //         },

    //         {
    //             id: uuid(),
    //             question: "Quelle est la valeur de votre patrimoine financier ?",
    //             instruction: `Le montant de votre patrimoine financier permet de construire une allocation personnalisée.`,
    //             choices: [
    //                 {
    //                     id: uuid(),
    //                     name: 'Moins de 10 000 MAD',
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: "De 10 000 MAD à 20 000 MAD"
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: "De 20 000 MAD à 50 000 MAD"
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: "De 50 000 MAD À 1 000 000 MAD"
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: "1 000 000 MAD et plus"
    //                 }
    //             ]
    //         },

    //         {
    //             id: uuid(),
    //             question: "Avez-vous des emprunts en cours de remboursement ?",
    //             instruction: `Avoir des emprunts affecte votre capacité d'épargne. Il peut s'agir d'emprunt immobilier, consommation, etc.`,
    //             binaryChoices: [
    //                 {
    //                     id: uuid(),
    //                     name: "Non",
    //                     status: false
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: 'Oui',
    //                     status: true
    //                 },


    //             ],

    //             emprunts: [

    //             ]
    //         },
    //         {
    //             id: uuid(),
    //             question: "Supposons que votre investissement perde 10% en 6 mois, comment réagissez- vous ? ",
    //             instruction: " ",
    //             choices: [
    //                 {
    //                     id: uuid(),
    //                     name: "J'effectue un nouveau virement",
    //                     type: 2,

    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: "Je récupère une partie du montant investi",
    //                     type: 2,

    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: "Je récupère la totalité du montant investi",
    //                     type: 2,

    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: 'Je patiente sans paniquer',
    //                     type: 2,

    //                 }

    //             ]

    //         },
    //     ]
    // },

    // {
    //     id: uuid(),
    //     name: 'Questions légales',
    //     questions: [
    //         {
    //             id: uuid(),
    //             question: "Sur l'assurance-vie, le capital placé est bloqué pendant 8 ans ?",
    //             prospects: [
    //                 {
    //                     id: uuid(),
    //                     name: 'Vrai',
    //                     type: 0,
    //                     message: {
    //                         id: uuid(),
    //                         title: 'Mauvaise reponse',
    //                         body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique."
    //                     }
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: 'Faux',
    //                     type: 1,
    //                     message: {
    //                         id: uuid(),
    //                         title: 'Exact !',
    //                         body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique."
    //                     }
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: 'Je ne sais pas',
    //                     type: 2,
    //                     message: {
    //                         id: uuid(),
    //                         title: 'Systeme a la reponse ',
    //                         body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique."
    //                     }
    //                 }
    //             ]
    //         },
    //         {
    //             id: uuid(),
    //             question: "Un OPCVM est un placement à capital garanti ?",
    //             prospects: [
    //                 {
    //                     id: uuid(),
    //                     name: 'Vrai',
    //                     type: 0,
    //                     message: {
    //                         id: uuid(),
    //                         title: 'Mauvaise reponse',
    //                         body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique."
    //                     }
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: 'Faux',
    //                     type: 1,
    //                     message: {
    //                         id: uuid(),
    //                         title: 'Exact !',
    //                         body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique."
    //                     }
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: 'Je ne sais pas',
    //                     type: 2,
    //                     message: {
    //                         id: uuid(),
    //                         title: 'Systeme a la reponse ',
    //                         body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique."
    //                     }
    //                 }
    //             ]

    //         },
    //         {
    //             id: uuid(),
    //             question: "Via un mandat d'arbitrage, vous déléguez les décisions d'investissement à AdvisorX ?",
    //             prospects: [
    //                 {
    //                     id: uuid(),
    //                     name: 'Vrai',
    //                     type: 0,
    //                     message: {
    //                         id: uuid(),
    //                         title: 'Mauvaise reponse',
    //                         body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique."
    //                     }
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: 'Faux',
    //                     type: 1,
    //                     message: {
    //                         id: uuid(),
    //                         title: 'Exact !',
    //                         body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique."
    //                     }
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: 'Je ne sais pas',
    //                     type: 2,
    //                     message: {
    //                         id: uuid(),
    //                         title: 'Systeme a la reponse ',
    //                         body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique."
    //                     }
    //                 }
    //             ]

    //         },
    //         {
    //             id: uuid(),
    //             question: "Avez-vous déjà investi dans des actions ou des obligations, en direct ou via des fonds d'investissement(SICAV, FCP ou OPCVM) ?",
    //             prospects: [
    //                 {
    //                     id: uuid(),
    //                     name: 'Vrai',
    //                     type: 0,
    //                     message: {
    //                         id: uuid(),
    //                         title: 'Mauvaise reponse',
    //                         body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique."
    //                     }
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: 'Faux',
    //                     type: 1,
    //                     message: {
    //                         id: uuid(),
    //                         title: 'Exact !',
    //                         body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique."
    //                     }
    //                 },
    //                 {
    //                     id: uuid(),
    //                     name: 'Je ne sais pas',
    //                     type: 2,
    //                     message: {
    //                         id: uuid(),
    //                         title: 'Exact !',
    //                         body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique."
    //                     }
    //                 },

    //             ]

    //         }
    //     ]
    // }
]





































