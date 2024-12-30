import uuid from "react-uuid";
import Calendar from "../svgs/Calendar";
import House from "../svgs/House";
import Key from "../svgs/Key";

export const questions = [
  {
    id: uuid(),
    name: "Situation familiale",
    questions: [
      {
        id: uuid(),
        question: "Pour commencer, quelle est votre situation familiale ?",
        instruction:
          "Vous n'aurez pas la même capacité de d'épargne selon votre situation familiale et maritale.",
        choices: [
          {
            id: uuid(),
            name: "Célibataire",
          },
          {
            id: uuid(),
            name: "Marié-e",
          },
          {
            id: uuid(),
            name: "Divorcé-e",
          },
        ],
      },

      {
        id: uuid(),
        question: "Avez-vous un ou des enfant(s) à charge ?",
        instruction:
          "Avoir des enfants implique des dépenses en plus, cela nous permet d'estimer votre capacité d'épargne.",
        choices: [
          {
            id: uuid(),
            name: "aucun",
          },
          {
            id: uuid(),
            name: "1",
          },
          {
            id: uuid(),
            name: "2",
          },
          {
            id: uuid(),
            name: "3",
          },
          {
            id: uuid(),
            name: "4 ou plus",
          },
        ],
      },
    ],
  },

  {
    id: uuid(),
    name: "Situation professionnelle",
    questions: [
      {
        id: uuid(),
        question: "Quelle est votre situation professionnelle ?",
        instruction:
          "Votre capacité d'épargne diffère selon votre situation professionnelle",
        choices: [
          {
            id: uuid(),
            name: "Fonctionnaire d'État",
          },
          {
            id: uuid(),
            name: "Indépendant-e/Libéral-e",
          },
          {
            id: uuid(),
            name: "Retraité-e",
          },
          {
            id: uuid(),
            name: "Étudiant-e",
          },
          {
            id: uuid(),
            name: "Salarié",
          },
          {
            id: uuid(),
            name: "En recherche d'emploi",
          },
        ],
      },
      {
        id: uuid(),
        question: "Quels sont les revenus de votre foyer ?",
        instruction:
          "Le montant des revenus de votre foyer nous aide à construire une allocation personnalisée.",
        radioStyleChoices: [
          {
            id: uuid(),
            name: "Revenus récurrents",
          },
          {
            id: uuid(),
            name: "Revenus non récurrents",
          },
        ],
        inputs: [
          {
            id: uuid(),
            label: "Revenu net annuel :",
            value: 0,
          },
          {
            id: uuid(),
            label: "Revenu de votre conjoint(e): ",
            value: 0,
          },
        ],
        message: {
          id: uuid(),
          title: "",
          body: `Votre revenu net annuel figure en général sur votre contrat de travail. Le cas échéant, ajoutez-y 
                vos revenus fonciers, vos pensions ou vos autres revenus.`,
        },
      },
    ],
  },

  {
    id: uuid(),
    name: "Situation patrimoniale",
    questions: [
      {
        id: uuid(),
        question: "Êtes-vous propriétaire ou locataire ?",
        instruction:
          "Cette information nous aide à construire une allocation personnalisée",
        iconChoices: [
          {
            id: uuid(),
            name: "Propriétaire",
            icon: Key,
          },
          {
            id: uuid(),
            name: "Locataire",
            icon: Calendar,
          },
          {
            id: uuid(),
            name: "Hébergé(e)",
            icon: House,
          },
        ],
      },
      {
        id: uuid(),
        question: "Quelle est la valeur de votre patrimoine immobilier ?",
        instruction: `Indiquez la valeur approximative des biens immobiliers de votre foyer, 
                sans déduire vos emprunts. Cette information
                        nous aide à construire une allocation personnalisée.`,
        choices: [
          {
            id: uuid(),
            name: "Moins de 250 000 MAD",
          },
          {
            id: uuid(),
            name: "De 250 000 MAD à 500 000 MAD",
          },
          {
            id: uuid(),
            name: "De 250 000 MAD à 1 000 000 MAD",
          },
          {
            id: uuid(),
            name: "De 1 000 000 MAD À 2 000 000 MAD",
          },
          {
            id: uuid(),
            name: "2 000 000 MAD et plus",
          },
        ],
      },

      {
        id: uuid(),
        question: "Quelle est la valeur de votre patrimoine financier ?",
        instruction: `Le montant de votre patrimoine financier permet de construire une allocation personnalisée.`,
        choices: [
          {
            id: uuid(),
            name: "Moins de 10 000 MAD",
          },
          {
            id: uuid(),
            name: "De 10 000 MAD à 20 000 MAD",
          },
          {
            id: uuid(),
            name: "De 20 000 MAD à 50 000 MAD",
          },
          {
            id: uuid(),
            name: "De 50 000 MAD À 1 000 000 MAD",
          },
          {
            id: uuid(),
            name: "1 000 000 MAD et plus",
          },
        ],
      },

      {
        id: uuid(),
        question: "Avez-vous des emprunts en cours de remboursement ?",
        instruction: `Avoir des emprunts affecte votre capacité d'épargne. Il peut s'agir d'emprunt immobilier, consommation, etc.`,
        binaryChoices: [
          {
            id: uuid(),
            name: "Non",
            status: false,
          },
          {
            id: uuid(),
            name: "Oui",
            status: true,
          },
        ],

        emprunts: [],
      },
      {
        id: uuid(),
        question:
          "Supposons que votre investissement perde 10% en 6 mois, comment réagissez- vous ? ",
        instruction: " ",
        choices: [
          {
            id: uuid(),
            name: "J'effectue un nouveau virement",
            type: 2,
          },
          {
            id: uuid(),
            name: "Je récupère une partie du montant investi",
            type: 2,
          },
          {
            id: uuid(),
            name: "Je récupère la totalité du montant investi",
            type: 2,
          },
          {
            id: uuid(),
            name: "Je patiente sans paniquer",
            type: 2,
          },
        ],
      },
    ],
  },

  {
    id: uuid(),
    name: "Questions légales",
    questions: [
      {
        id: uuid(),
        question:
          "Sur l'assurance-vie, le capital placé est bloqué pendant 8 ans ?",
        prospects: [
          {
            id: uuid(),
            name: "Vrai",
            type: 0,
            message: {
              id: uuid(),
              title: "Mauvaise reponse",
              body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique.",
            },
          },
          {
            id: uuid(),
            name: "Faux",
            type: 1,
            message: {
              id: uuid(),
              title: "Exact !",
              body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique.",
            },
          },
          {
            id: uuid(),
            name: "Je ne sais pas",
            type: 2,
            message: {
              id: uuid(),
              title: "Systeme a la reponse ",
              body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique.",
            },
          },
        ],
      },
      {
        id: uuid(),
        question: "Un OPCVM est un placement à capital garanti ?",
        prospects: [
          {
            id: uuid(),
            name: "Vrai",
            type: 0,
            message: {
              id: uuid(),
              title: "Mauvaise reponse",
              body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique.",
            },
          },
          {
            id: uuid(),
            name: "Faux",
            type: 1,
            message: {
              id: uuid(),
              title: "Exact !",
              body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique.",
            },
          },
          {
            id: uuid(),
            name: "Je ne sais pas",
            type: 2,
            message: {
              id: uuid(),
              title: "Systeme a la reponse ",
              body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique.",
            },
          },
        ],
      },
      {
        id: uuid(),
        question:
          "Via un mandat d'arbitrage, vous déléguez les décisions d'investissement à AdvisorX ?",
        prospects: [
          {
            id: uuid(),
            name: "Vrai",
            type: 0,
            message: {
              id: uuid(),
              title: "Mauvaise reponse",
              body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique.",
            },
          },
          {
            id: uuid(),
            name: "Faux",
            type: 1,
            message: {
              id: uuid(),
              title: "Exact !",
              body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique.",
            },
          },
          {
            id: uuid(),
            name: "Je ne sais pas",
            type: 2,
            message: {
              id: uuid(),
              title: "Systeme a la reponse ",
              body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique.",
            },
          },
        ],
      },
      {
        id: uuid(),
        question:
          "Avez-vous déjà investi dans des actions ou des obligations, en direct ou via des fonds d'investissement(SICAV, FCP ou OPCVM) ?",
        prospects: [
          {
            id: uuid(),
            name: "Vrai",
            type: 0,
            message: {
              id: uuid(),
              title: "Mauvaise reponse",
              body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique.",
            },
          },
          {
            id: uuid(),
            name: "Faux",
            type: 1,
            message: {
              id: uuid(),
              title: "Exact !",
              body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique.",
            },
          },
          {
            id: uuid(),
            name: "Je ne sais pas",
            type: 2,
            message: {
              id: uuid(),
              title: "Exact !",
              body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis quasi alias officia blanditiis, molestiae beatae quisquam est, facere officiis accusamus repellat corporis vel distinctio minus possimus accusantium optio similique.",
            },
          },
        ],
      },
    ],
  },
];
