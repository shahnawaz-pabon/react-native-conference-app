/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

import Icon from 'react-native-vector-icons/Ionicons';

import TabScreen from './screens/tabs';

const slides = [
  {
    key: 'welcome-to-rnca',
    title: 'Welcome to RNCA',
    text: <Text >The
      <Text style={{ color: '#00BFA6', fontWeight: 'bold' }}> React Native Conference App </Text>
      describes the preview of react native framework with the proper
      use of awesome components.</Text>,
    image: require('../assets/images/1.png'),
    backgroundColor: '#2c3e50',
  },
  {
    key: 'what-is-react-native',
    title: 'What is React Native?',
    text: <Text>
      It's a <Text style={{ color: '#00BFA6', fontWeight: 'bold' }}>Javascript Framework </Text>
      like React that is used to build mobile applications using native components rather than 
      web components.
    </Text>,
    image: require('../assets/images/2.png'),
    backgroundColor: '#2c3e50',
  },
  {
    key: 'hello-world',
    title: 'Hello World!',
    text: 'It\'s really a fantastic framework. So take your computer, play music and start coding with react native.',
    image: require('../assets/images/3.png'),
    backgroundColor: '#2c3e50',
  },
  {
    key: 'let\'s-start',
    title: 'Let\'s start',
    text: 'Let\'s get started.',
    image: require('../assets/images/4.png'),
    backgroundColor: '#2c3e50',
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };
  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    this.setState({ showRealApp: true });
  };
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} resizeMode="contain" source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        <>
          <StatusBar barStyle="dark-content" />
          <TabScreen />
        </>

      );
    } else {
      //Intro slides
      return (
        <>
          <StatusBar barStyle="dark-content" />
          <AppIntroSlider
            slides={slides}
            renderItem={this._renderItem}
            onDone={this._onDone}
            showSkipButton={true}
            renderDoneButton={this._renderDoneButton}
            renderNextButton={this._renderNextButton}
            buttonTextStyle={{ fontFamily: 'Ubuntu-Bold' }}
            dotStyle={{ backgroundColor: '#fff' }}
            activeDotStyle={{ backgroundColor: '#00BFA6' }}
          />
        </>

      );
    }
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Ubuntu-Medium',
    maxWidth: 300
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginTop: 30,
    fontFamily: 'Ubuntu-Bold'
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#00BFA6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 150,
  }
});
