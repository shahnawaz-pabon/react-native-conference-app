import React from 'react';

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

// import StackNavigator from '../../navigators/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './style';

class MapScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => {
                navigation.openDrawer();
            }}>
                <Icon name="md-list-box" color="#fff" size={32} />
            </TouchableOpacity>
        ),
        // headerTitle instead of title
        headerTitle: () => <Text style={[styles.text, { fontSize: 20 }]}>Map</Text>,

    });

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
                    This MapScreen
              </Text>
            </View>
        );
    }

}

const Stack = createStackNavigator();

function StackMapScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Map"
                component={MapScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#2c3e50',
                    },
                    headerTintColor: '#fff',
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    //     fontFamily: 'Ubuntu-Bold'
                    // },
                }}
            />
        </Stack.Navigator>
    );
}

export default StackMapScreen;

// export default function StackMapScreen({ navigation }) {
//     console.log(navigation);
//     return (
//         <StackNavigator stackName="Map" stackComponent={MapScreen} />
//     )
// }