import React from 'react';
import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Nav from './Nav';
import Home from './Home';

const App = ({ loading, client, user }) => {
  if (loading) return null;
  console.log(user);

  return (
    <Router>
      <Wrapper>
        <Nav client={client} user={user} />
        <Main>
          <Route exact path="/" component={Home} />
        </Main>
      </Wrapper>
    </Router>
  );
};

const query = gql`
  query Users {
    user {
      _id
    }
    pins {
      _id
      title
      url
      author
    }
  }
`;

export default graphql(query, { props: ({ data }) => ({ ...data }) })(withApollo(App));

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  background: #84a9c0;
  flex: 1 0 auto;
`;
