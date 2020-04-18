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

import ScheduleScreen from './screens/schedule';

const slides = [
  {
    key: 'welcome-to-rnca',
    title: 'Welcome to RNCA',
    text: 'Description.\nSay something cool',
    image: require('../assets/images/1.png'),
    backgroundColor: '#2c3e50',
  },
  {
    key: 'somethun-dos',
    title: '',
    text: 'Other cool stuff',
    image: require('../assets/images/2.png'),
    backgroundColor: '#2c3e50',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../assets/images/3.png'),
    backgroundColor: '#2c3e50',
  },
  {
    key: 'somethun1',
    title: 'Let\'s start',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
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
          <ScheduleScreen />
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
    paddingVertical: 30,
    fontFamily: 'Ubuntu-Medium'
  },
  title: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
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
