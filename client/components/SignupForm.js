import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import mutation from '../mutations/Signup';
import AuthForm from './AuthForm';

class SignupForm extends Component {
    render() {
        return(
            <div>
                <h3>Sign up</h3>
                <AuthForm />
            </div>
        )
    }
}

export default graphql(mutation)(SignupForm);