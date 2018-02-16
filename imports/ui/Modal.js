import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const newPin = gql`
  mutation newPin($title: String!, $url: String!) {
    newPin(title: $title, url: $url) {
      _id
    }
  }
`;

class Modal extends Component {
  static propTypes = {
    handleClick: PropTypes.func,
  };

  submitPin = (e) => {
    e.preventDefault();
    this.props
      .newPin({
        variables: {
          title: this.title.value,
          url: this.url.value,
        },
      })
      .catch(err => console.log(err));
  };

  render() {
    const { handleClick } = this.props;
    return (
      <Wrapper className="wrapper" onClick={handleClick}>
        <Content>
          <Form onSubmit={this.submitPin}>
            <h2>New Pin</h2>
            <label htmlFor="title">
              Title
              <input type="text" name="title" ref={input => (this.title = input)} />
            </label>
            <label htmlFor="url">
              Image URL
              <input type="text" name="url" ref={input => (this.url = input)} />
            </label>
            <input type="submit" />
          </Form>
        </Content>
      </Wrapper>
    );
  }
}

export default graphql(newPin, { name: 'newPin', options: { refetchQueries: ['Users'] } })(Modal);

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  > h2 {
    font-size: 2.4rem;
  }
  > label {
    padding: 1rem 0;
    font-size: 1.6rem;
    > input {
      width: 100%;
    }
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background: #6a66a3;
  padding: 2rem;
  transform: translate(-50%, -50%);
`;
