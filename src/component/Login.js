import React, { useRef, useState } from 'react'
import {Button, Card, Form, Container, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

import Draggable from 'react-draggable'; 

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        }  catch {
            setError('Failed to sign in')
        }

        setLoading(false)
        }

        

    return (
        <>
        <Container 
       className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Log In</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required/>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
                </Form>
                <div className='w-100 text-center mt-3'>
                    <Link to='/forgotpassword'>Forgot password?</Link>
                </div>
            </Card.Body>
         </Card>
         </Container>
         <div className='w-100 text-center mt-2'>
             Need an account? <Link to='/signup'>Sign up</Link>
         </div>
        </>
    )
}
