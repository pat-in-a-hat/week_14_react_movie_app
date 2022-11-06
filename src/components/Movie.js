import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'
import Stars from './Stars'
//import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'
import { useState } from 'react';
import Review from './Review'
//import Stars from './Stars'

//the review left in the review form modal needs to then flow upstream into the movie here
//use frank's trick of feeding the parent function in as a prop to the child

export default function Movie(props) {
    const name = props.name
    const description = props.description
    const dateReleased = props.dateReleased
    const genre = props.genre
    const ageRating = props.ageRating
    const image = props.image
    const id = props.id
    const stars = 0
    const reviewList = []
    const isReviewed = reviewList.length > 0

    const [reviews, setReviews] = useState(ReviewList)

    const addReview = (str) => {
        const newReviews = [...reviewList]
        console.log('review being passed into add review function')
        console.log(str.stars)
        console.log(str.text)
        console.log(reviewList)

        newReviews.push(
            {
                key: str.stars + str.length,
                text: str.text,
                stars: str.stars
            }
        )

        setReviews(newReviews)
        console.log(newReviews + 'new reviews have been updated in state')
        
    }

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
                <Review review = {reviews}/>
                </ListGroup>
                    <ReviewForm addReview = {addReview}/>
            </Card>
    )
}