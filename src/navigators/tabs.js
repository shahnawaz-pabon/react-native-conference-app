import React from 'react';

import {
    StatusBar,
    Text,
    StyleSheet
} from 'react-native';

// import { styles } from './style';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

// import ScheduleScreen from '../screens/schedule';
import StackScheduleScreen from '../screens/schedule';
import StackSpeakerScreen from '../screens/speakers';
import StackMapScreen from '../screens/map';
import StackAboutScreen from '../screens/about';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 14
    }
});

const bottomTabConfig = {
    initialRouteName: 'Schedule',
    backBehavior: 'initialRoute',
    activeColor: '#f0edf6',
    inactiveColor: '#7f8c8d',
    barStyle: { backgroundColor: '#2c3e50' },
};

const TabScreen = createMaterialBottomTabNavigator(
    {
        Schedule: {
            screen: StackScheduleScreen,
            navigationOptions: {
                tabBarLabel: <Text style={styles.text}>Schedule</Text>,
                tabBarIcon: ({ tintColor }) => (
                    <Icon style={{ color: tintColor }} name="ios-calendar" size={24} />
                ),
            }
        },
        Speakers: {
            screen: StackSpeakerScreen,
            navigationOptions: {
                tabBarLabel: <Text style={styles.text}>Speakers</Text>,
                tabBarIcon: ({ tintColor }) => (
                    <Icon style={{ color: tintColor }} name="ios-people" size={24} />
                ),
            }
        },
        Map: {
            screen: StackMapScreen,
            navigationOptions: {
                tabBarLabel: <Text style={styles.text}>Map</Text>,
                tabBarIcon: ({ tintColor }) => (
                    <Icon style={{ color: tintColor }} name="ios-pin" size={24} />
                ),
            }
        },
        About: {
            screen: StackAboutScreen,
            navigationOptions: {
                tabBarLabel: <Text style={styles.text}>About</Text>,
                tabBarIcon: ({ tintColor }) => (
                    <Icon style={{ color: tintColor }} name="ios-information-circle" size={24} />
                ),
            }
        },
    },
    bottomTabConfig
);

export default TabScreen; 

