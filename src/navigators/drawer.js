import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

// import ScheduleScreen from '../schedule';
import SpeakerScreen from '../screens/speakers';
import MapScreen from '../screens/map';
import AboutScreen from '../screens/about';



const Drawer = createDrawerNavigator();

import { styles } from './style';

export default class Drawer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <NavigationContainer>

                <Drawer.Navigator
                    drawerStyle={{
                        backgroundColor: '#fff',
                    }}

                >
                    <Drawer.Screen
                        name="Speakers"
                        component={SpeakerScreen}
                        options={{
                            drawerLabel: () => (
                                <Text style={styles.text}>Speakers</Text>
                            ),
                            drawerIcon: () => (
                                <Icon name="ios-people" size={24} />
                            )
                        }}
                    />
                    <Drawer.Screen
                        name="Map"
                        component={MapScreen}
                        options={{
                            drawerLabel: () => (
                                <Text style={styles.text}>Map</Text>
                            ),
                            drawerIcon: () => (
                                <Icon name="ios-pin" size={24} />
                            )
                        }}
                    />
                    <Drawer.Screen
                        name="About"
                        component={AboutScreen}
                        options={{
                            drawerLabel: () => (
                                <Text style={styles.text}>About</Text>
                            ),
                            drawerIcon: () => (
                                <Icon name="ios-information-circle" size={24} />
                            )
                        }}
                    />
                </Drawer.Navigator>

            // </NavigationContainer>


            // <View
            //     style={{
            //         flex: 1,
            //         justifyContent: 'center',
            //         alignItems: 'center',
            //         padding: 50,
            //     }}>
            //     <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 18 }}>
            //         This is ScheduleScreen
            //   </Text>
            // </View>
        );
    }

}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 14
    }
})