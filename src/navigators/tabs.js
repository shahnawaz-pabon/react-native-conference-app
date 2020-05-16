import React from 'react';

import {
    StatusBar,
    Text,
    StyleSheet
} from 'react-native';

// import { styles } from './style';

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

// import ScheduleScreen from '../screens/schedule';
import StackScheduleScreen from '../screens/schedule';
import StackSpeakerScreen from '../screens/speakers';
import MapScreen from '../screens/map';
import AboutScreen from '../screens/about';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 14
    }
});

const TabScreen = createMaterialBottomTabNavigator(
    {
        Schedule: {
            screen: StackScheduleScreen,
            navigationOptions: {
                tabBarLabel: <Text style={styles.text}>Schedule</Text>,
                tabBarIcon: () => (
                    <Icon name="ios-calendar" size={24} />
                ),
            }
        },
        Speakers: {
            screen: StackSpeakerScreen,
            navigationOptions: {
                tabBarLabel: <Text style={styles.text}>Speakers</Text>,
                tabBarIcon: () => (
                    <Icon name="ios-people" size={24} />
                ),
            }
        },
        Map: {
            screen: MapScreen,
            navigationOptions: {
                tabBarLabel: <Text style={styles.text}>Map</Text>,
                tabBarIcon: () => (
                    <Icon name="ios-pin" size={24} />
                ),
            }
        },
        About: {
            screen: AboutScreen,
            navigationOptions: {
                tabBarLabel: <Text style={styles.text}>About</Text>,
                tabBarIcon: () => (
                    <Icon name="ios-information-circle" size={24} />
                ),
            }
        },
    },
    {
        initialRouteName: 'Schedule',
        backBehavior: 'initialRoute',
        // active
        // activeColor: '#fff',
        inactiveColor: '#000',
        barStyle: { backgroundColor: '#2c3e50' },
    }
);

export default TabScreen;

// f0edf6 7f8c8d

