import React from 'react';

import {
    StatusBar,
    Text,
    StyleSheet
} from 'react-native';

// import { styles } from './style';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

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

function TabScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Schedule"
            backBehavior="initialRoute"
            activeColor="#f0edf6"
            inactiveColor="#7f8c8d"
            barStyle={{ backgroundColor: '#2c3e50' }}
            sceneAnimationEnabled={false}
        >
            <Tab.Screen
                name="Schedule"
                component={StackScheduleScreen}
                options={{
                    tabBarLabel: <Text style={styles.text}>Schedule</Text>,
                    tabBarIcon: ({ color }) => (
                        <Icon color={color} name="ios-calendar" size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Speakers"
                component={StackSpeakerScreen}
                options={{
                    tabBarLabel: <Text style={styles.text}>Speakers</Text>,
                    tabBarIcon: ({ color }) => (
                        <Icon color={color} name="ios-people" size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Map"
                component={StackMapScreen}
                options={{
                    tabBarLabel: <Text style={styles.text}>Map</Text>,
                    tabBarIcon: ({ color }) => (
                        <Icon color={color} name="ios-pin" size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="About"
                component={StackAboutScreen}
                options={{
                    tabBarLabel: <Text style={styles.text}>About</Text>,
                    tabBarIcon: ({ color }) => (
                        <Icon color={color} name="ios-information-circle" size={24} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabScreen;

