import React from 'react';

import {
    View,
    Text,
    Button,
} from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';

// import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome';

// import ScheduleScreen from '../schedule';
import SpeakerScreen from '../speakers';
import MapScreen from '../map';
import AboutScreen from '../about';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import DrawerScreen from '../../navigators/drawer';

// const Drawer = createDrawerNavigator();

import { styles } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

class ScheduleScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (


            // <Drawer.Navigator
            //     drawerStyle={{
            //         backgroundColor: '#fff',
            //     }}

            // >
            //     <Drawer.Screen
            //         name="Speakers"
            //         component={SpeakerScreen}
            //         options={{
            //             drawerLabel: () => (
            //                 <Text style={styles.text}>Speakers</Text>
            //             ),
            //             drawerIcon: () => (
            //                 <Icon name="ios-people" size={24} />
            //             )
            //         }}
            //     />
            //     <Drawer.Screen
            //         name="Map"
            //         component={MapScreen}
            //         options={{
            //             drawerLabel: () => (
            //                 <Text style={styles.text}>Map</Text>
            //             ),
            //             drawerIcon: () => (
            //                 <Icon name="ios-pin" size={24} />
            //             )
            //         }}
            //     />
            //     <Drawer.Screen
            //         name="About"
            //         component={AboutScreen}
            //         options={{
            //             drawerLabel: () => (
            //                 <Text style={styles.text}>About</Text>
            //             ),
            //             drawerIcon: () => (
            //                 <Icon name="ios-information-circle" size={24} />
            //             )
            //         }}
            //     />
            // </Drawer.Navigator>




            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 50,
                }}>
                <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 18 }}>
                    This is ScheduleScreen
              </Text>
            </View>
        );
    }

}

export default function StackScheduleScreen({ navigation }) {
    console.log(navigation);
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Schedule"
                component={ScheduleScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#2c3e50'
                    },
                    headerTitle: <Text
                        style={[styles.text, { fontSize: 18, color: 'white' }]}
                    >
                        Schedule
                    </Text>,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => {
                                console.log("Clicked");
                            }}
                            style={{
                                marginLeft: 30
                            }}
                        >
                            <Icon name="th-list" color="white" size={24} />
                        </TouchableOpacity>

                    ),
                }}
            />

        </Stack.Navigator>
    )
}