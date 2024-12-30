import { createSlice } from '@reduxjs/toolkit'
import { questions } from '../utils/smProject/questions';




export const smProjectSlice = createSlice({
    name: 'smP',
    initialState: {
        questions,
        userHasSelectedChoice: false,
        refreshSlidersState: false,
        userResponses: [],
        userResponse: {},
        tempUserResponses: [],
        birthDate: '',
        selectedChoice: false,
        selectedBinary: false
    },
    reducers: {
        setBinarySelected(state, action) {
            state.selectedBinary = action.payload
        },
        setChoiceIsSelected(state, action) {

            const { categorieId, questionId, id } = action.payload

            const categoryIndex = state.questions.findIndex(c => c.id === categorieId)
            const questionIndex = state.questions[categoryIndex].questions.findIndex(q => q.id === questionId)
            // const choiceIndex = state.questions[categoryIndex].questions[questionIndex].choices.findIndex(c => c.id === id)
            state.questions[categoryIndex].questions[questionIndex].choices.forEach(c => {
                c.id === id ? c.isSelected = true : c.isSelected = false
            })
        },
        setBirthDate(state, action) {
            state.birthDate = action.payload
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

            } = action.payload
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

export const { setUserHasSelectedChoice, refreshSliders, setInputValue, pushResponse, setUserResponse, setTempUserResponses, clearTempUserResponses, setBirthDate, setChoiceIsSelected, setBinarySelected } = smProjectSlice.actions


export default smProjectSlice.reducer