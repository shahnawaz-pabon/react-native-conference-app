import React from 'react';

import {
    View,
    Text,
    Button,
    TouchableOpacity
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

class ScheduleScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

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
                            <Icon name="th-list" color="white" size={22} />
                        </TouchableOpacity>

                    ),
                }}
            />

        </Stack.Navigator>
    )
}