import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import TabScreen from './tabs';

import { DrawerComponent } from '../components/drawer';

const Drawer = createDrawerNavigator();

export default function DrawerScreen(props) {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerComponent {...props} />}>
                <Drawer.Screen name="Home" component={TabScreen} />
            </Drawer.Navigator>
        </NavigationContainer>

    );
}