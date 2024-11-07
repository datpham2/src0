import React from 'react'
import { Container, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap'

export default function Main() {
    return (
        <div>
            <Container>

                <Form
                    style={{ width: '30%', margin: '0 auto' }}
                >
                    <FormGroup>
                        <Label for="username">
                            Username
                        </Label>
                        <Input
                            autoComplete='off'
                            autoFocus
                            id="username"
                            name="username"
                            placeholder="username"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">
                            Password
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />
                    </FormGroup>
                    <Button 
                        color="primary"
                        style={{ display: 'block', margin: '0 auto' }}
                    >
                        Login
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
