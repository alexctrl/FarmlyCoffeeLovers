import styled from 'styled-components';

const OutsideBox = styled.View`
  alignItems: center;
  justifyContent: center;
  backgroundColor: #F5F;
`;

const Container = styled.View`
  height: 100%;
  alignItems: center;
  justifyContent: center;
  /* backgroundColor: #F5F5F5; */
`;

const Footer = styled.View`
  /* alignItems: center; */
  /* justifyContent: center; */
  /* flex: 1; */
  position:absolute;
  bottom:0;
  width:100%;
  height:60px;   /* Height of the footer */
  background:#6cf;
  align-items: center;
  flex-direction: row;
`;

const Logo = styled.Image`
  height: 28%;
  marginBottom: 20px;
`;

const Subtitle = styled.Text`
  color: #279895;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 60px;
  font-family: "Helvetica";
`;

const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 5px;
  backgroundColor: #FFF;
  alignSelf: stretch;
  marginBottom: 15px;
  marginHorizontal: 20px;
  fontSize: 16px;
`;

const ErrorMessage = styled.Text`
  textAlign: center;
  color: #ce2029;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const Button = styled.TouchableHighlight`
  padding: 20px;
  borderRadius: 5px;
  backgroundColor: #279895;
  alignSelf: stretch;
  margin: 15px;
  marginHorizontal: 20px;
`;

const TabButton = styled.TouchableHighlight`

  background-color: #EEE;
  width:34%;
  padding-bottom:10px;
  padding-top:10px;
  flex
`;

const ButtonText = styled.Text`
  color: #FFF;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

const SignUpLink = styled.TouchableHighlight`
  padding: 10px;
  marginTop: 20px;
`;

const SignUpLinkText = styled.Text`
  color: #999;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

export { 
  Container, Logo, Input, ErrorMessage, Button, 
  ButtonText, SignUpLink, SignUpLinkText, Subtitle, 
  Footer, OutsideBox, TabButton
};
