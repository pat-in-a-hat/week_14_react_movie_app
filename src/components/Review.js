import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Stars from './Stars'

export default function Review(props) {
    const reviews = props.reviews

  return (
    <>
    {reviews.map(review => {
    return(
            <ListGroup.Item bg='dark' text='light' key={review.key}>
                {review.text} <Stars stars = {review.stars}/>
            </ListGroup.Item>
    )
    })
    }
    </>
  )
}