import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native';

import { createAppContainer } from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';

import Icon from 'react-native-vector-icons/Ionicons';

// import ScheduleScreen from '../schedule';
import SpeakerScreen from '../screens/speakers';
import MapScreen from '../screens/map';
import AboutScreen from '../screens/about';
import TabScreen from './tabs';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 14
    }
})

const Drawer = createDrawerNavigator({
    Home: {
        screen: TabScreen,
        navigationOptions: {
            drawerLabel: () => (
                <Text style={styles.text}>Home</Text>
            ),
            drawerIcon: () => (
                <Icon name="ios-people" size={24} />
            )
        }
    }
}, {
    initialRouteName: 'Home',
    contentOptions: {
        activeTintColor: '#e91e63',
    },
});

const DrawerScreen = createAppContainer(Drawer);

export default DrawerScreen;