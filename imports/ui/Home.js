import React from 'react';
import styled from 'styled-components';
import Pin from './Pin';

const Home = ({ pins, user }) => (
  <Wrapper>
    {pins.map(pin => (
      <Pin
        key={pin._id}
        id={pin._id}
        title={pin.title}
        url={pin.url}
        author={pin.author}
        user={user}
      />
    ))}
  </Wrapper>
);

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
