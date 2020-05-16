import React from 'react';

import {
    View,
    Text
} from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';

// import StackNavigator from '../../navigators/stack';

import { styles } from './style';

class ScheduleScreen extends React.Component {

    static navigationOptions = {
        title: 'Home',
        /* No more header config here! */
    };


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

const StackScheduleScreen = createStackNavigator(
    {
        Schedule: ScheduleScreen,
        //   Details: DetailsScreen,
    },
    {
        //   initialRouteName: 'Schedule',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default StackScheduleScreen;

// export default function StackScheduleScreen({ navigation }) {
//     console.log(navigation);
//     return (
//         <StackNavigator stackName="Schedule" stackComponent={ScheduleScreen} />
//     )
// }