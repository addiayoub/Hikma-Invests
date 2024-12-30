import { createSlice } from '@reduxjs/toolkit'
import { questions } from '../utils/questionnaire/data';




export const questionnaireSlice = createSlice({
    name: 'qs',
    initialState: {
        questions,
        userHasSelectedChoice: false,
        refreshSlidersState: false,
        userResponses: [

        ],
        userResponse: {},
        tempUserResponses: [],
        emprunts: []
    },
    reducers: {
        pushEmprunts(state, action) {
            state.userResponses.push(...state.emprunts)
        },
        resetEmprunts(state, action) {
            const { categorieId, questionId } = action.payload

            const categoryIndex = state.questions.findIndex(c => c.id === categorieId)
            const questionIndex = state.questions[categoryIndex].questions.findIndex(q => q.id === questionId)

            state.questions[categoryIndex].questions[questionIndex].emprunts = []
        },

        fillEmprunts(state) {
            const emprunts = [];
            state.questions.forEach(category => {
                category.questions.forEach(question => {
                    if (question.hasOwnProperty('emprunts')) {
                        emprunts.push(...question.emprunts);
                    }
                });
            });
            state.emprunts = emprunts;
        },

        addEmprunt(state, action) {

            const { categorieId, questionId, emprunt } = action.payload

            const categoryIndex = state.questions.findIndex(c => c.id === categorieId)
            const questionIndex = state.questions[categoryIndex].questions.findIndex(q => q.id === questionId)

            state.questions[categoryIndex].questions[questionIndex].emprunts.push(emprunt)
        },
        deleteEmprunt(state, action) {
            const { categorieId, questionId, id } = action.payload

            const categoryIndex = state.questions.findIndex(c => c.id === categorieId)
            const questionIndex = state.questions[categoryIndex].questions.findIndex(q => q.id === questionId)
            const empruntIndex = state.questions[categoryIndex].questions[questionIndex].emprunts.findIndex(e => e.id === id)
            state.questions[categoryIndex].questions[questionIndex].emprunts.splice(empruntIndex, 1)
        },

        setInputValue(state, action) {
            const { categorieId, questionId, id, value } = action.payload
            const categoryIndex = state.questions.findIndex(c => c.id === categorieId)
            const questionIndex = state.questions[categoryIndex].questions.findIndex(q => q.id === questionId)
            const inputIndex = state.questions[categoryIndex].questions[questionIndex].inputs.findIndex(e => e.id === id)
            state.questions[categoryIndex].questions[questionIndex].inputs[inputIndex].value = +value
        },

        setUserHasSelectedChoice(state, action) {
            state.userHasSelectedChoice = action.payload
        },
        refreshSliders(state) {
            state.refreshSlidersState = !state.refreshSlidersState
        },
        pushResponse(state, action) {
            const tempResponses = action.payload
            state.userResponses.push(...tempResponses)
        },
        setUserResponses(state, action) {
            state.userResponse = action.payload
        },
        setTempUserResponses(state, action) {

            const {
                question,
                response,
                score,
            } = action.payload

            // if (type && type === 'input') {
            //     state.tempUserResponses.push({
            //         question,
            //         response,
            //         score
            //     })
            // }


            const isSameQuestion = state.tempUserResponses.some(r => r.question === question)
            if (isSameQuestion) {
                const responseIndex = state.tempUserResponses.findIndex(r => r.question === question)
                state.tempUserResponses.splice(responseIndex, 1)
            }



            state.tempUserResponses.push(action.payload)



        },
        clearTempUserResponses(state) {
            state.tempUserResponses = []
        }


    }
})

export const { addEmprunt, deleteEmprunt, setEmprunt, setUserHasSelectedChoice, refreshSliders, setInputValue, pushResponse, setUserResponse, setTempUserResponses, clearTempUserResponses, fillEmprunts, resetEmprunts, pushEmprunts } = questionnaireSlice.actions


export default questionnaireSlice.reducer