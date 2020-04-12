import React, {Component} from 'react';

class UserInput extends Component {
    constructor(){
        super();
        this.state = {
            city: '',
            state: '',
            minLength: '0',
            maxLength: '15',
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
        return (
            <div>
                <form onSubmit = {this.handleSubmit} >
                    <div>
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
                            <option value = '0'>Max Miles</option>
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
                        <button type = "submit" className = "loginSubmit findTrails">Find me trails</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default UserInput;