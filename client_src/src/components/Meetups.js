import React,{Component} from "react";
import axios from 'axios';
import MeetupItem from './MeetupItem';

class Meetup extends Component{
    
    constructor(){
        super();
        this.state={
            meetups : [],
        }
    }

    componentWillMount(){
        this.getMeetups();
    }

    getMeetups(){
        try {
            axios.get('http://localhost:3000/api/meetups')
            .then(response =>{
                this.setState({meetups: response.data}, ()=>{
                    console.log(this.state.meetups);
                });
            })
        } catch (error) {
            console.log(error);
        }
        
    }
    
    render(){
        const meetupItems = this.state.meetups.map((meetup,index)=>{
            return(
                <MeetupItem key={meetup.id}  item={meetup} />
            );
        });
        return(
            <div>
                <h1>Meetup</h1>
                <ul className='collection'>
                    {meetupItems}
                </ul>
            </div>
        );
    }
}

export default Meetup;