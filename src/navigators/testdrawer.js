import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabScreen from './tabs';

import { DrawerComponent } from '../components/drawer';

const Drawer = createDrawerNavigator();

export default function DrawerScreen(props) {

    const [initRender, setInitRender] = useState(true);

    useEffect(() => {
        setInitRender(false);
    }, [initRender]);

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={props => <DrawerComponent {...props} />}
                drawerContentOptions={{
                    // labelStyle: { fontFamily: "Ubuntu-Bold" }
                }}
                drawerStyle={{ width: initRender ? null : "90%" }}
            >
                <Drawer.Screen name="Home" component={TabScreen} />
            </Drawer.Navigator>
        </NavigationContainer>

    );
}