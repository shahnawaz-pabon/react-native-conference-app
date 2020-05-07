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

import ScheduleScreen from '../screens/schedule';
import SpeakerScreen from '../screens/speakers';
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
            screen: ScheduleScreen,
            navigationOptions: {
                title: <Text>Title</Text>,
                tabBarLabel: <Text style={styles.text}>Schedule</Text>,
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-calendar" color={color} size={24} />
                ),
            }
        },
        Speakers: {
            screen: SpeakerScreen,
            navigationOptions: {
                title: <Text>Title</Text>,
                tabBarLabel: <Text style={styles.text}>Speakers</Text>,
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-people" color={color} size={24} />
                ),
            }
        },
        Map: {
            screen: MapScreen,
            navigationOptions: {
                title: <Text>Title</Text>,
                tabBarLabel: <Text style={styles.text}>Map</Text>,
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-pin" color={color} size={24} />
                ),
            }
        },
        About: {
            screen: AboutScreen,
            navigationOptions: {
                title: <Text>Title</Text>,
                tabBarLabel: <Text style={styles.text}>About</Text>,
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-information-circle" color={color} size={24} />
                ),
            }
        },
    },
    {
        initialRouteName: 'Schedule',
        activeColor: '#f0edf6',
        inactiveColor: '#7f8c8d',
        barStyle: { backgroundColor: '#2c3e50' },
    }
);

export default TabScreen;

