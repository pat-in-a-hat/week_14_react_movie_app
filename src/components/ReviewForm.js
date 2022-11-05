import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function ReviewForm(props) {
    //used some of Frank's instructional code here to help with React hooks and callback
    //Ensuring I'm properly handling state with the form submission
    const [review, setReview] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        //need to add this functionality upstream
        props.addReview(review)

        setReview('') //resets the state
    }

    const handleChange = (event => {
        setReview(event.target.value)
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
    <>
    <Button variant="info" onClick={handleShow}>
        Leave a review
    </Button>


    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Leave a review</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <Form onSubmit = {handleSubmit}>
            <Form.Label>How many stars?</Form.Label>
            {[1,2,3,4,5].map((number) =>
            <Form.Check
            inline
            label={number}
            value={number}
            type='radio'
            key={`inline-radio-${number}`}
            />
            )}
            <Form.Group className="mb-3" controlId="reviewForm">
                <Form.Label>What did you think of the film?</Form.Label>
                <Form.Control as="textarea" rows={3} autoFocus placeholder='Write your review here'/>
            </Form.Group>
      </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="dark" type='submit' onClick={handleClose}>Save changes</Button>
      </Modal.Footer>
    </Modal>
    </>  
    )
}