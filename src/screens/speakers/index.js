import React from 'react';

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { styles } from './style';

class SpeakerScreen extends React.Component {

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

export default function StackSpeakerScreen({ navigation }) {
    console.log(navigation);
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Speakers"
                component={SpeakerScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#2c3e50'
                    },
                    headerTitle: <Text
                        style={[styles.text, { fontSize: 18, color: 'white' }]}
                    >
                        Speakers
                    </Text>,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => {
                                console.log("Clicked");
                            }}
                            style={{
                                marginLeft: 30
                            }}
                        >
                            <Icon name="th-list" color="white" size={22} />
                        </TouchableOpacity>

                    ),
                }}
            />

        </Stack.Navigator>
    )
}