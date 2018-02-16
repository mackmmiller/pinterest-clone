import React from 'react';
import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Nav from './Nav';
import Home from './Home';

const filterPins = (pins, author) => pins.filter(pin => pin.author === author);

const App = ({
  loading, client, user, pins,
}) => {
  if (loading) return null;
  return (
    <Router>
      <Wrapper>
        <Nav client={client} user={user} />
        <Main>
          <Switch>
            <Route exact path="/" render={({ match }) => <Home pins={pins} user={user} />} />
            <Route
              path="/pins/:id"
              render={({ match }) => <Home pins={filterPins(pins, match.params.id)} user={user} />}
            />
          </Switch>
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
