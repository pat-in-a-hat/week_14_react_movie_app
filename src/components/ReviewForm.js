import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function ReviewForm(props) {
    //used some of Frank's instructional code here to help with React hooks and callback
    //Ensuring I'm properly handling state with the form submission
    const [review, setReview] = useState({'stars': null, 'text': ''})

    const handleSubmit = (event) => {
        event.preventDefault()

        const stars = review.stars;
        const text = review.text;

        /*if (!Number(stars)) {
            alert('Please add your star rating!')
            return;
        }*/

        console.log('submitting', review)
        //need to add this functionality upstream
        props.addReview(review)

        setReview('') //resets the state
    }

    const handleChange = (event) => {
        const stars = event.target.stars;
        const text = event.target.text;
        setReview({...review, 'stars': stars, 'text': text})
    }

    /*const handleChange = (event => {
        setReview(event.target.value)
    })*/

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
            name='stars'
            onChange={handleChange}
            label={number}
            value={number}
            type='radio'
            key={`inline-radio-${number}`}
            />
            )}
            <Form.Group className="mb-3" controlId="reviewForm">
                <Form.Label>What did you think of the film?</Form.Label>
                <Form.Control as="textarea" name='text' onChange={handleChange} rows={3} autoFocus placeholder='Write your review here'/>
            </Form.Group>
            <input type="submit"/>
      </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="dark" type='submit' value='Submit'onClick={handleClose}>Save changes</Button>
      </Modal.Footer>
    </Modal>
    </>  
    )
}