import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar,  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import api from '../../services/api';
import { RNCamera } from 'react-native-camera';

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

export default class AddCoffee extends Component {
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
        <Subtitle>Add coffeeeee</Subtitle>
        
      </Container>
    );
  }
}

