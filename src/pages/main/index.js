import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import api from '../../services/api';

import {
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText,
  Subtitle,
} from './styles';

export default class Main extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };

  render() {
    return (
      <Container>
        <StatusBar hidden />
        <Logo source={require('../../images/logo-light-green.png')} resizeMode="contain" />
        <Subtitle>For coffee lovers</Subtitle>
        
      </Container>
    );
  }
}
