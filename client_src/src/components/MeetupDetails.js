import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

class MeetupDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            details: ''
        }
    }
    componentWillMount(){
        this.getMeetup();
    }
    getMeetup(){
        let meetupId = this.props.match.params.id;
        try {
            axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
            .then(response =>{
                this.setState({details: response.data}, ()=>{
                    console.log(this.state.details);
                });
            })
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        return(
            <div>
                <Link to='/' className='btn grey'>Back</Link>
                <h1>{this.state.details.name}</h1>
                <ul className='collection'>
                    <li className='collection-item'>City: {this.state.details.city}</li>
                </ul>
                <Link className='btn' to={`/meetup/edit/${this.state.details.id}`}>Edit</Link>

                <button className='btn red right'>Delete</button>
            </div>
        );
    }
}

export default MeetupDetails;