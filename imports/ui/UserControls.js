import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Accounts } from 'meteor/accounts-base';

class UserController extends Component {
  static propTypes = {
    client: PropTypes.object,
  };

  state = {
    form: 'Login',
  };

  changeForm = (e) => {
    this.setState({
      form: e.target.textContent,
    });
  };

  handleClick = () => {
    const { form } = this.state;
    if (form === 'Login') {
      this.loginUser();
    } else {
      this.registerUser();
    }
  };

  loginUser = () => {
    Meteor.loginWithPassword(this.email.value, this.password.value, (err) => {
      console.log(err);
      if (!err) {
        this.props.client.resetStore();
      }
    });
  };

  registerUser = () => {
    Accounts.createUser(
      {
        email: this.email.value,
        password: this.password.value,
      },
      (err) => {
        if (!err) {
          this.props.client.resetStore();
        }
        console.log(err);
      },
    );
  };

  render() {
    return (
      <React.Fragment>
        <li>
          <button onClick={this.changeForm}>Register</button>
          <button onClick={this.changeForm}>Login</button>
        </li>
        <Form>
          <label htmlFor="email">
            Email<input name="email" type="text" ref={input => (this.email = input)} />
          </label>
          <label htmlFor="password">
            Password<input name="password" type="password" ref={input => (this.password = input)} />
          </label>
        </Form>
        <li>
          <Submit onClick={this.handleClick}>{this.state.form}</Submit>
        </li>
      </React.Fragment>
    );
  }
}

export default UserController;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.li`
  justify-content: flex-end;
`;

const Submit = styled.button``;
