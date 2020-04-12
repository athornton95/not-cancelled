import React, {Component} from 'react';
import UserInput from './UserInput';
import Link from 'next/link'
// import WeatherInfo from './WeatherInfo/WeatherInfo'


class TrailFinder extends Component {
    constructor(){
        super();
        this.state = {
            lat: '',
            lng: '',
            city: '',
            state: '',
            trails: [],
            minLength: '',
            maxLength: '',
            difficulty: '',
        }
    }

    findGeoCode = async (formData) => {
        try{
        const searchURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=${formData.city},+${formData.state}&key=AIzaSyCxC93pv465QlIoGBJEWgafUpZwTJ_5tPg`
        const result = await fetch(searchURL)
        const parsedResponse = await result.json();
        // console.log(`${parsedResponse} is the parsed response for findGeoCode`);
        if(result.status === 200){
            this.setState({
                lat: parsedResponse.results[0].geometry.location.lat,
                lng: parsedResponse.results[0].geometry.location.lng,
                city: formData.city,
                state: formData.state,
                minLength: formData.minLength,
                maxLength: formData.maxLength,
                difficulty: formData.difficulty
            })
        }
        // console.log(this.state)
        this.findTrails();
        }catch(err){
            console.log(err)
        }
    }
    findTrails = async () => {
        console.log(this.state.maxLength)
        try{
        const searchURL = `https://www.hikingproject.com/data/get-trails?lat=${this.state.lat}&lon=${this.state.lng}&minLength=${this.state.minLength}&maxDistance=${this.state.maxLength}&key=200465360-942e3fb792b81fa531e25b7484cbc0f9`
        const result = await fetch(searchURL);
        const parsedResponse = await result.json();
        console.log(searchURL);
        if(result.status === 200){
            if(this.state.difficulty === ''){
                this.setState({
                    trails: parsedResponse.trails.filter(trails => trails.length < this.state.maxLength)
                }) 
            } else {
                this.setState({
                    trails: parsedResponse.trails.filter(trails => trails.length < this.state.maxLength && trails.difficulty === this.state.difficulty)
                })
            }
        }
        }catch(err){
            console.log(err);
        }
    }

    render(formData){
    console.log(this.state.trails);
        const trailList = this.state.trails.map((trail) => {
            return (
                <div>
                   <div key="trail.id" className="eachTrail">
                        <h4>{trail.name}</h4> 
                        <p>{trail.location}</p> 
                     </div>
                </div>
            )
        })
    // console.log(`${trailList} trailLIST`);
        return(
            <div className = 'userInput-Wrapper'>
                <div>
                    <div className = 'userInput'>
                        <UserInput findGeoCode = {this.findGeoCode} findTrails={this.findTrails}/>
                    </div>
                    <div className = 'trailList'>
                        { trailList }
                    </div>
                </div>
            </div>
        )
    }
}


export default TrailFinder;