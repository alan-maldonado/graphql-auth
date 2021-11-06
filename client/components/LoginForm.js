import React, { Component } from 'react';
import mutation from '../mutations/Login';
import { graphql } from 'react-apollo';
import AuthForm from './AuthForm';

class LoginForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password }
    });
  }

  render() {
    return (
      <div className="container">
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);