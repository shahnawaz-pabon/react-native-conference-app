import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import MapScreen from '../map';
import AboutScreen from '../about';

const Drawer = createDrawerNavigator();

import { styles } from './style';

export default class ScheduleScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (


            <Drawer.Navigator>
                <Drawer.Screen name="Map" component={MapScreen} />
                <Drawer.Screen name="About" component={AboutScreen} />
            </Drawer.Navigator>


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