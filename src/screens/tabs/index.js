import React from 'react';

import {
    StatusBar,
    Text,
} from 'react-native';

import { styles } from './style';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import MapScreen from '../map';
import ScheduleScreen from '../schedule';

const Tab = createMaterialBottomTabNavigator();

export default class TabScreen extends React.Component {

    render() {

        return (
            <>

                <StatusBar backgroundColor="#2c3e50"></StatusBar>

                <NavigationContainer>

                    <Tab.Navigator
                        initialRouteName="Schedule"
                        activeColor="#f0edf6"
                        inactiveColor="#7f8c8d"
                        barStyle={{ backgroundColor: '#2c3e50' }}
                    >
                        <Tab.Screen
                            name="Schedule"
                            component={ScheduleScreen}
                            options={{
                                tabBarLabel: <Text style={styles.text}>Schedule</Text>,
                                tabBarIcon: ({ color }) => (
                                    <Icon name="ios-calendar" color={color} size={24} />
                                ),

                            }}
                        />

                        <Tab.Screen
                            name="Map"
                            component={MapScreen}
                            options={{
                                tabBarLabel: <Text style={styles.text}>Map</Text>,
                                tabBarIcon: ({ color }) => (
                                    <Icon name="ios-pin" color={color} size={24} />
                                ),
                            }}
                        />

                    </Tab.Navigator>

                </NavigationContainer>
            </>

        )
    }
}