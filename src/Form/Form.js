import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomButton from '../Components/Button/button'
import Input from '../Components/Input/Input'
import { change } from '../Redux/Action/ActionCreators/FormActionCreator'

const Form = () => {
    const state = useSelector(state => state.formData)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(change(e))
    }
    const handleSubmit = () => {

    }
    return (
        <div>
            <form className="ip" onSubmit={handleSubmit}>
                <Input
                    type='text'
                    name='ipAddress'
                    value= {state.ipAddress}
                    handleChange={handleChange}
                    label='IP Address'
                    required
                />
                <CustomButton type="submit">Search</CustomButton>
            </form>
        </div>
    )
}

export default Form
