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
import TabScreen from './tabs';


const Drawer = createDrawerNavigator();


export default class DrawerScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavigationContainer>

                <Drawer.Navigator
                    drawerStyle={{
                        backgroundColor: '#fff',
                    }}

                >
                    <Drawer.Screen
                        name="Tabs"
                        component={TabScreen}
                        options={{
                            drawerLabel: () => (
                                <Text style={styles.text}>Tabs</Text>
                            ),
                            drawerIcon: () => (
                                <Icon name="ios-people" size={24} />
                            )
                        }}
                    />
                    
                </Drawer.Navigator>

            </NavigationContainer>


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