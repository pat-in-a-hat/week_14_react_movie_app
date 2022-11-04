import React from 'react';
import Card from 'react-bootstrap/Card'
import Stars from './Stars'
//import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'

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
    const reviews = [] //<ReviewList />
    const stars = 0
    const isReviewed = reviews.length > 0

    return (
            <Card bg='dark' text='light' style={{width: '285px'}}>
                <Card.Body>
                <Card.Img src={image} style={{width: '250px'}} className='align-items-center'/>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                        {dateReleased} - {ageRating} {isReviewed ? <Stars rating={stars} /> : ' '}
                    </Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <ListGroup>
                    {/*{isReviewed 
                    ? reviews.map(review => {
                        return (
                            <ListGroup.Item>{review}</ListGroup.Item>
                        )
                        })
                    : 'No reviews yet!'
                    }*/}
                </ListGroup>
                <Button variant='info' onClick={() => {<ReviewForm />} }>Add Review</Button>
                    {/*have button with review modal pop up*/}
            </Card>
    )
}

export default Movie;