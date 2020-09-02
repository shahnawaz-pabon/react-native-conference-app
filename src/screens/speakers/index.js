import React from 'react';

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './style';

class SpeakerScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => {
                navigation.openDrawer();
            }}>
                <Icon name="md-list-box" color="#fff" size={32} />
            </TouchableOpacity>
        ),
        // headerTitle instead of title
        headerTitle: () => <Text style={[styles.text, { fontSize: 20 }]}>Speakers</Text>,

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
                    This is SpeakerScreen
              </Text>
            </View>
        );
    }

}


const Stack = createStackNavigator();

function StackSpeakerScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Speaker"
                component={SpeakerScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#2c3e50',
                    },
                    headerTintColor: '#fff',
                }}
            />
        </Stack.Navigator>
    );
}

export default StackSpeakerScreen;

// export default function StackSpeakerScreen({ navigation }) {
//     console.log(navigation);
//     return (
//         <StackNavigator stackName="Speakers" stackComponent={SpeakerScreen} />
//     )
// }