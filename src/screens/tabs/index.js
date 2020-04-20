import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MapScreen from '../map';
import ScheduleScreen from '../schedule';

const Tab = createMaterialBottomTabNavigator();

export default class TabScreen extends React.Component {

    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Schedule" component={ScheduleScreen} />
            </Tab.Navigator>
        )
    }
}