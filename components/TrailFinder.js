import React, {Component} from 'react';
import UserInput from './UserInput';


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
        const searchURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=${formData.city},+${formData.state}&key=AIzaSyAHhKGOfTAvy-VlwP5IryEgZCzTS5WMH48`
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
        const searchURL = `https://www.hikingproject.com/data/get-trails?lat=${this.state.lat}&lon=${this.state.lng}&minLength=${this.state.minLength}&maxDistance=${this.state.maxLength}&key=200727642-2406c0de25c5407cdeb3dcd60053bcd4`
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
                   <div key="trail.id" className="card">
                   <a href={trail.url} target="_blank"><div className="card-content">
                        <h2>{trail.name}</h2> 
                        <p>{trail.location}</p> 
                        <p>Length: {trail.length} miles</p>
                        <p>{trail.summary}</p>
                        <p>Current conditions: {trail.conditionDetails} | Last updated: {trail.conditionDate}</p>
                    </div></a>
                     </div>
                     <style jsx>{`
                        h2 {
                            border-bottom: 1px solid;
                        }
                        a {
                            text-decoration: none;
                            color: black;
                        }
                        
                        .card {
                            background-color: white;
                            width: 100%;
                            border-radius: 1rem;
                            box-shadow: 1px 4px 8px #050066;
                            padding: .25rem;
                            min-height: 18rem;
                        }
                        .card-content {
                            margin: 2rem;
                            text-align: left;
                        }

                        .card:hover {
                            transform: translateY(-3px);
                        }
                    `}</style>
                </div>
            )
        })
        return(
            <div className="trail-container">
                <div className="trail-info-wrapper">
                    <div className = 'userInput'>
                        <UserInput findGeoCode = {this.findGeoCode} findTrails={this.findTrails}/>
                    </div>
                    <div className = 'trail-list'>
                        { trailList }
                    </div>
                </div>
                <style jsx>{`
                    .trail-container {
                        display: grid;
                    }

                    .trail-list {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        grid-column-gap: 1.5rem;
                        grid-row-gap: 1.5rem;
                        margin-top: 1rem;
                    }

                    .trail-info-wrapper {
                        text-align: center;
                        margin-top: 10rem;
                    }
                `}</style>
            </div>
        )
    }
}


export default TrailFinder;