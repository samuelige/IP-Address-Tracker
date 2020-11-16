import React, { useEffect } from 'react'
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux'
import CustomButton from '../Components/Button/button'
import Input from '../Components/Input/Input'
import { change, submit } from '../Redux/Action/ActionCreators/FormActionCreator'
import { LoadGeoData } from '../Redux/Action/ActionCreators/LoadGeoDataAction'
import './Form.scss'


const Form = () => {
    const state = useSelector(state => state.formData)

    const searchState = useSelector(state => state.search)

    console.log(searchState.search)


    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(change(e))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submit(state.ipAddress))

    }
    const APP_IP = `${searchState.search}`;
    const APP_KEY = 'at_nNg78XsxROQptBqQqi6oCjug5rRKs';
    const API_URL = `https://geo.ipify.org/api/v1?apiKey=${APP_KEY}&ipAddress=${APP_IP}`

    
    useEffect(() => {
        loadData()
    }, [searchState.search])

    const loadData = async () => {
        
        try {
            const geodata = await axios.get(API_URL)
            // console.log(geodata, 'geodata')
            dispatch(LoadGeoData(geodata.data))
        }
        catch(error) {
            console.error(error);
        }
    }
    
    
    
    return (
        <div>
            <form className="ip">
                <Input
                    type='text'
                    name='ipAddress'
                    value= {state.ipAddress}
                    handleChange={handleChange}
                    label='IP Address'
                    required
                />
                <CustomButton  type="submit" onClick={handleSubmit}>Search</CustomButton>
            </form>
        </div>
    )
}

export default Form
