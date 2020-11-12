import { FormType } from '../ActionTypes/FormType'

const change = (e) => ({
    type: FormType.CHANGE,
    payload: e.target.value,
})

const submit = () => ({
    type: FormType.SUBMIT
})









export {change, submit}