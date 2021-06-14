import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './registration-view.scss';
import axios from 'axios';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post('https://myflixxapp.herokuapp.com/users', {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    })
    .then(response => {
      const data = response.data;
      console.log(data);
      window.open('/', '_self'); // '_self' is necessary so the page will open in the current tab
      alert('You may now log in');
    })
    .catch(e => {
      console.log('error registering the user')
    });
  };

  return (
    <Container>
      <div className="register-heading">
      <h2>Create an account</h2>
      </div>
      <br />
      <Form className="registration-form">
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Pick a Username: </Form.Label>
          <Form.Control 
            className="form-field"
            type="text" 
            placeholder="Username" 
            required
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <Form.Text 
            className="text-muted"
            >Must be alphanumeric and contain at least 5 characters
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Choose a Password: </Form.Label>
          <Form.Control 
            className="form-field"
            type="text" 
            placeholder="Password" 
            required
            value-={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <Form.Text 
            className="text-muted"
          >Password is required.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter Email Address: </Form.Label>
          <Form.Control 
            className="form-field"
            type="text" 
            placeholder="example@gmail.com" 
            required
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <Form.Text 
            className="text-muted"
          >Must be a valid email address.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicBirthday">
          <Form.Label>Enter Date of Birth:</Form.Label>
          <Form.Control 
            className="form-field"
            type="date" 
            placeholder="MM/DD/YYYY" 
            required
            value={birthday} 
            onChange={(e) => setBirthday(e.target.value)} 
          />
        </Form.Group>

        <Button type="submit" 
                variant="dark" 
                className="sign-in-button" 
                onClick={handleRegister}
        >
          Submit
        </Button>
        {/* <br />
        <div className="current-user">
          Already have an account?
        </div> */}
        <Link to={`/`}>
          <Button 
            variant="secondary"
            className="sign-up-button existing-user"
          >
            Existing User Sign In</Button>
        </Link>
      </Form>
    </Container>
  )
};