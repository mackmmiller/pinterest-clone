import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import UserControls from './UserControls';
import Modal from './Modal';

class Nav extends Component {
  static propTypes = {
    client: PropTypes.object,
    // user: PropTypes.shape({

    // })
  };

  state = {
    modalVisible: false,
  };

  filterPins = () => {
    console.log('Sorting');
  };

  openModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  closeModal = (e) => {
    if (e.target.classList.contains('wrapper')) {
      this.setState({
        modalVisible: false,
      });
    }
  };

  logout = () => {
    Meteor.logout();
    this.props.client.resetStore();
  };

  render() {
    const { client, user } = this.props;
    const { modalVisible } = this.state;
    return (
      <Fragment>
        <StyledNav>
          <ul>
            <li>
              <button>Home</button>
            </li>
            {user ? (
              <Fragment>
                <li>
                  <button onClick={this.filterPins}>My Pins</button>
                </li>
                <li>
                  <button onClick={this.openModal}>New Pin</button>
                </li>
                <li>
                  <button onClick={this.logout}>Logout</button>
                </li>
              </Fragment>
            ) : (
              <UserControls client={client} />
            )}
          </ul>
        </StyledNav>
        {modalVisible &&
          createPortal(
            <Modal handleClick={this.closeModal.bind(this)} />,
            document.getElementById('modal'),
          )}
      </Fragment>
    );
  }
}

export default Nav;

const StyledNav = styled.nav`
  background: #ddd8b8;
  font-size: 2.4rem;
  > ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    > li {
      list-style: none;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      font-size: 1.6rem;
    }
  }
`;
