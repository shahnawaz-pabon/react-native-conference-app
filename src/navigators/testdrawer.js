import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabScreen from './tabs';

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={TabScreen} />
            </Drawer.Navigator>
        </NavigationContainer>

    );
}