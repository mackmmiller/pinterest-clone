import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import styled from 'styled-components';

const deletePin = gql`
  mutation deletePin($pinId: String!) {
    deletePin(pinId: $pinId) {
      _id
    }
  }
`;

const Pin = ({
  title, url, author, user,
}) => (
  <Wrapper>
    <img src={url} />
    <h3>{title}</h3>
    <div>
      {user._id == author && <i className="far fa-times-circle" />}
      <Link to={`pins/${author}`}>{author}</Link>
    </div>
  </Wrapper>
);

export default graphql(deletePin, { name: 'deletePin' })(Pin);

const Wrapper = styled.div`
  max-width: 30rem;
  max-height: 45rem;
  text-align: center;
  background: #ba2d0b;
  padding: 2rem 1rem;
  margin: 1.5rem;
  border-radius: 0.5rem;
  color: #d5f2e3;
  > img {
    height: auto;
    width: auto;
    max-width: 20rem;
    max-height: 20rem;
  }
`;
