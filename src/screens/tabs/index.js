import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import MapScreen from '../map';
import ScheduleScreen from '../schedule';

const Tab = createMaterialBottomTabNavigator();

export default class TabScreen extends React.Component {

    render() {
        return (

            <NavigationContainer>

                <Tab.Navigator
                    initialRouteName="Schedule"
                    activeColor="#f0edf6"
                    inactiveColor="#3e2465"
                    barStyle={{ backgroundColor: '#694fad' }}
                >
                    <Tab.Screen
                        name="Schedule"
                        component={ScheduleScreen}
                        options={{
                            tabBarLabel: 'Schedule',
                            tabBarIcon: ({ color }) => (
                                <Icon name="ios-calendar" color={color} size={26} />
                            ),
                        }}
                    />

                    <Tab.Screen
                        name="Map"
                        component={MapScreen}
                        options={{
                            tabBarLabel: 'Map',
                            tabBarIcon: ({ color }) => (
                                <Icon name="ios-pin" color={color} size={26} />
                            ),
                        }}
                    />

                </Tab.Navigator>

            </NavigationContainer>

        )
    }
}