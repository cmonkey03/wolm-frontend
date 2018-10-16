import React from 'react';
import { Button, Checkbox, Form, Input, Message, TextArea } from 'semantic-ui-react';

const Signup = (props) => {
  return (
    <Form onSubmit={props.handleSignupSubmit} error>
      <Form.Field
        control={Input}
        label='Username'
        placeholder="Username"
        type='text'
        maxLength='16'
        value={props.usernameInput}
        onChange={props.handleUsernameInput}
      />
      <Form.Field
        control={Input}
        label='Password'
        placeholder='Password'
        type='password'
        maxLength='32'
        value={props.passwordInput}
        onChange={props.handlePasswordInput}
      />
      <Form.Field
        control={Input}
        label='Zipcode'
        placeholder='Zipcode'
        type='text'
        maxLength='5'
        value={props.zipcodeInput}
        onChange={props.handleZipcodeInput}
      />
      <Form.Field
        control={TextArea}
        label='Bio'
        placeholder='Bio'
        type='text'
        maxLength='200'
        value={props.bioInput}
        onChange={props.handleBioInput}
      />
      <Form.Field>
        { props.adminInput ?
          <Checkbox toggle checked label='Administrator' onChange={props.handleAdminChange}/>
          :
          <Checkbox toggle label='Administrator' onChange={props.handleAdminChange}/>
        }
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      { props.errors && <Message
          error
          header='Action Forbidden'
          content={props.errors.join("; ")}
          />
      }
      <Button type='submit'>Signup</Button>
    </Form>
  )
}

export default Signup;
