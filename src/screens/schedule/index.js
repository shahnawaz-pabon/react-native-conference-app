import React from 'react';

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './style';

class ScheduleScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({

        headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => {
                navigation.openDrawer();
            }}>
                <Icon name="md-list-box" color="#fff" size={32} />
            </TouchableOpacity>
        ),
        // headerTitle instead of title
        headerTitle: () => <Text style={[styles.text, { fontSize: 20 }]}>Schedule</Text>,

    })

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
                backgroundColor: '#2c3e50',
            },
            headerTintColor: '#fff',
            // headerTitleStyle: {
            //     fontWeight: 'bold',
            //     fontFamily: 'Ubuntu-Bold'
            // },
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