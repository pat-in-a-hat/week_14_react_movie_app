import React from 'react';
import Card from 'react-bootstrap/Card'
//import { useState } from 'react';
//import Stars from './Stars'

function Movie(props) {
    const name = props.name
    const description = props.description
    const dateReleased = props.dateReleased
    const genre = props.genre
    const ageRating = props.ageRating
    const image = props.image
    const id = props.id
    const review = []
    const stars = 0

    return (
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                    {/*have button with review modal pop up*/}
            </Card>
    )
}

export default Movie;