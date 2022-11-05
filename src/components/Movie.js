import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'
import Stars from './Stars'
//import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'

//import { useState } from 'react';
//import Stars from './Stars'

//the review left in the review form modal needs to then flow upstream into the movie here
//use frank's trick of feeding the parent function in as a prop to the child

function Movie(props) {
    const name = props.name
    const description = props.description
    const dateReleased = props.dateReleased
    const genre = props.genre
    const ageRating = props.ageRating
    const image = props.image
    const id = props.id
    const reviewList = [] //<ReviewList />
    const stars = 0
    const isReviewed = reviewList.length > 0

    const [reviews, setReviews] = useState(reviewList)

    const addReview = (stars, str) => {
        const newReviews = [...reviewList]

        newReviews.push(
            {
                key: stars + str.length,
                text: str,
                stars: stars,
            }
        )

        setReviews(newReviews)
        console.log(reviewList)
        console.log(newReviews)
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
                    {/*{isReviewed 
                    ? reviews.map(review => {
                        return (
                            <ListGroup.Item>{review}</ListGroup.Item>
                        )
                        })
                    : 'No reviews yet!'
                    }*/}
                </ListGroup>
                    <ReviewForm addReview = {addReview}/>
            </Card>
    )
}

export default Movie;