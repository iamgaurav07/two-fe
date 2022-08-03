import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as actions from '../../Store/Actions'

import './Auth.css'
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const history = useNavigate()
  const dispatch = useDispatch()

  const [state, setState] = useState({
    username: '',
    password: ''
  })

  const { username, password } = state

  const handleInput = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    setState({
      ...state, [name]: value
    })
  }

  const loginHandler = (event) => {
    event.preventDefault()
    dispatch(actions.login({ username, password }, ()=>{ 
      history('/dashboard')
    }))
  }  

  return (
    <div className="container login my-5">
      <h4 className="text-center">Login</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" name='username' value={username} onChange={handleInput} placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' value={password} onChange={handleInput} placeholder="Password" /> 
        </Form.Group>
        <Button variant="primary" type="button" onClick={loginHandler}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
