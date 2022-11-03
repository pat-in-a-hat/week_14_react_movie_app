import React from 'react';
//import Stars from './Stars'

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            dateReleased: props.dateReleased,
            genre: props.genre,
            ageRating: props.ageRating,
            image: props.image,
            review: [],
            stars: 0
        }
    }

    render(){
        return (
            <div className='card' style='width: 30rem'>
                <img src={this.state.image} className='card-img-top'></img>
                <div className='card-body'>
                    <h5 className='card-title'>{this.state.name}</h5>
                    <p className='card-text'>{this.state.description}</p>
                    {/*have button with review modal pop up*/}
                </div>
            </div>
        )
    }
}