import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MapScreen from '../map';
import ScheduleScreen from '../schedule';

const Tab = createMaterialBottomTabNavigator();

export default class TabScreen extends React.Component {

    render() {
        return (
            <Tab.Navigator
                initialRouteName="Map"
                activeColor="#f0edf6"
                inactiveColor="#3e2465"
                barStyle={{ backgroundColor: '#694fad' }}
            >
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Schedule" component={ScheduleScreen} />
            </Tab.Navigator>
        )
    }
}