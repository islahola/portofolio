import React from 'react';
import emailjs from 'emailjs-com';
import { Button,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_ve1vmqv', 'template_gnhmavl', e.target, 'user_kHXmQRxujLkKvavE8zNF0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
     <Form className="contact-form" onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Subject</Form.Label>
            <Form.Control type="text" name="subject" placeholder="Enter Subject" />
         </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label  className="text-white">Name</Form.Label>
         <Form.Control type="text" name="name" placeholder="Name" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="text-white">Email address</Form.Label>
         <Form.Control type="email" name="email" placeholder="Enter email" />
         <Form.Text className="text-muted">
         I will never share your email with anyone else.
         </Form.Text>
     </Form.Group>
     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
         <Form.Label  className="text-white" >Massage</Form.Label>
         <Form.Control name="message"  as="textarea" rows={3} />
     </Form.Group>
      <Button variant="success" type="submit">Send</Button>
      </Form>
  );
}