import React, {Component} from 'react';
import { css, jsx } from '@emotion/core';
import theme from '../pages/theme';

class UserInput extends Component {
    constructor(){
        super();
        this.state = {
            city: '',
            state: '',
            minLength: '',
            maxLength: '',
            difficulty: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.findGeoCode(this.state)
    }
    render(){
        const hoverColor = '#08009c';
        return (
            <div className="user-input-form">
                <form onSubmit = {this.handleSubmit} >
                    <div className="text-field">
                        <input onChange = {this.handleChange} className = "formInput" placeholder = 'City' type = "text" name = "city"/>
                    </div>
                    <div>
                        <input onChange = {this.handleChange} className = "formInput" placeholder = 'State' type = "text" name = "state"/>
                    </div>
                    <div>
                        <select onChange = {this.handleChange} className = "formInput select" value = {this.state.minLength}name = 'minLength'>
                            <option value = '0'>Min Miles</option>
                            <option value = '1'>1 Miles</option>
                            <option value = '5'>5 Miles</option>
                            <option value = "10">10 Miles</option>
                        </select>
                    </div>
                    <div>
                        <select onChange = {this.handleChange} className = "formInput select" value = {this.state.maxLength} name = 'maxLength'>
                            <option value = ''>Max Miles</option>
                            <option value = '5'>5 Miles</option>
                            <option value = '10'>10 Miles</option>
                            <option value = "15">15 Miles</option>
                            <option value = "20">20 Miles</option>
                            <option value = "100">No Max</option>
                        </select>
                    </div>
                    <div>
                        <select onChange = {this.handleChange} className = "formInput select" value = {this.state.difficulty} name = 'difficulty'>
                            <option value = ''>Difficulty</option>
                            <option value = 'green'>Novice</option>
                            <option value = 'greenBlue'>Proficient</option>
                            <option value = "blue">Strenuous</option>
                            <option value = "blueBlack">Very strenuous</option>
                            <option value = "black">You're Wild</option>
                            <option value = ''>All Difficulties</option>
                        </select>
                    </div>
                    <div>
                        <button type = "submit" className = "global-button">Find me trails</button>
                    </div>
                </form>
                <style jsx>{`
                    .formInput{
                        border-color: ${theme.palette.primary.main};
                        padding: 5px 10px;
                        margin: 5px;
                        width: 37vh;
                        font-size: 20px;
                    }
                    .select {
                        padding: 5px 10px;
                    }
                    .global-button {
                        text-decoration: none;
                        padding: 1rem 1.75rem;
                        background-color: ${theme.palette.primary.main};
                        color: white;
                        border-radius 2rem;
                        font-weight: 700;
                        box-shadow: 1px 4px 8px #050066;
                        margin: 1rem 1rem;
                        border: none;
                        font-size: .8rem;
                    }
                    .global-button:hover {
                        background-color: ${hoverColor};
                    }
                    textarea:focus, input:focus{
                        outline: none;
                    }
                `}</style>
            </div>
        )
    }
}


export default UserInput;