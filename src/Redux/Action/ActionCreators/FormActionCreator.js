import { FormType } from '../ActionTypes/FormType'

const change = (e) => ({
    type: FormType.CHANGE,
    payload: e.target.value,
})

const submit = (payload) => ({
    type: FormType.SUBMIT,
    payload: payload
})









export {change, submit}