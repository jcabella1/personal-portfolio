import "./contact.scss";
import emailjs from '@emailjs/browser';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

export default function Contact() {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Oops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };
    return(
        <div className="contact" id="contact">
            <h1>Contact</h1>
        <Form onSubmit={handleOnSubmit}>
                <Form.Field
                className='form-label'
                id='form-input-control-email'
                control={Input}
                label='Email'
                name='from_email'
                placeholder='Email'
                required
                icon='mail'
                iconPosition='left'
                />
                <Form.Field
                id='form-input-control-last-name'
                className='form-label'
                control={Input}
                label='Name'
                name='from_name'
                placeholder='Name'
                required
                icon='user circle'
                iconPosition='left'
                />
                <Form.Field
                id='form-textarea-control-opinion'
                className='form-label'
                control={TextArea}
                label='Message'
                name='message'
                placeholder='Message'
                required
                />
                <Button type='submit' color='green'>Submit</Button>
          </Form>
        </div>
    );
}