import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image
} from 'react-native';

import { createAppContainer } from 'react-navigation';

import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

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
});

class CustomDrawerComponent extends React.Componect{
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <Image source={{ 'uri': 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg' }} />
                </View>
                <ScrollView>
                    <DrawerItems {...props} />

                </ScrollView>
            </SafeAreaView>
        )
    }
}

const Drawer = createDrawerNavigator({
    Home: {
        screen: TabScreen,
        navigationOptions: {
            drawerLabel: () => (
                <Text style={styles.text}>Home</Text>
            ),
            drawerIcon: () => (
                <Icon name="ios-briefcase" size={24} />
            )
        }
    }
}, {
    contentComponent: CustomDrawerComponent,
    // initialRouteName: 'Home',
    // drawerPosition: 'left',
    // contentOptions: {
    //     activeTintColor: '#e91e63',
    // },
});

const DrawerScreen = createAppContainer(Drawer);

export default DrawerScreen;