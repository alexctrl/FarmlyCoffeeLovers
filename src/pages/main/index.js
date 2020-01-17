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
  Footer,
  OutsideBox,
  TabButton,
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

  handleAddCoffee = async () => {
    this.props.navigation.navigate('AddCoffee');
  };
  handleFeed = async () => {
    this.props.navigation.navigate('Feed');
  };
  handleMyProfile = async () => {
    this.props.navigation.navigate('MyProfile');
  };

  render() {
    return (
      <OutsideBox>
        <Container>
          <StatusBar hidden />
          <Logo source={require('../../images/logo-light-green.png')} resizeMode = "contain" />
          <Subtitle>For coffee lovers</Subtitle>
          <Button onPress={this.handleAddCoffee}>
            <ButtonText>Goto Add a coffee</ButtonText>
          </Button>
          
        </Container>
        <Footer>
          <TabButton onPress={this.handleAddCoffee}>
            <ButtonText>Feed</ButtonText>
          </TabButton>
          <TabButton onPress={this.handleFeed}>
            <ButtonText>Add coffee</ButtonText>
          </TabButton>
          <TabButton onPress={this.handleMyProfile}>
            <ButtonText>User</ButtonText>
          </TabButton>        
        </Footer>
      </OutsideBox>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  },
  buttonText: {
    fontSize: 14
  }
});
