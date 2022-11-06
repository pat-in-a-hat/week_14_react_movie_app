import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'


export default function Review(props) {
    const reviews = props

  return (
    reviews.map(review => {
    return(
        <div key={review.key}>
            <ListGroup.Item>{review.stars}</ListGroup.Item>
            <ListGroup.Item>{review.text}</ListGroup.Item>
        </div>
    )
    })
  )
}