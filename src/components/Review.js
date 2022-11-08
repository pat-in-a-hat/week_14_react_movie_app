import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge';

export default function Review(props) {
    const reviews = props.reviews

  return (
    <>
    {reviews.map(review => {
    return(
            <ListGroup.Item key={review.key}>
                {review.text} <Badge bg='warning' pill>{review.stars}</Badge>
            </ListGroup.Item>
    )
    })
    }
    </>
  )
}