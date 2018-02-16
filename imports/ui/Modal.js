import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Modal = ({ handleClick }) => (
  <Wrapper className="wrapper" onClick={handleClick}>
    <Content>
      <Form>
        <h2>New Pin</h2>
        <label htmlFor="title">
          Title
          <input type="text" name="title" />
        </label>
        <label htmlFor="url">
          Image URL
          <input type="text" name="url" />
        </label>
        <button>Submit</button>
      </Form>
    </Content>
  </Wrapper>
);

Modal.propTypes = {
  handleClick: PropTypes.func,
};

export default Modal;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  width: 50rem;
  height: 45rem;
  background: #6a66a3;
  padding: 2rem;
  transform: translate(-50%, -50%);
`;
