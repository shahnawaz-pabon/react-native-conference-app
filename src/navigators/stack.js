import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class StackNavigator extends React.Component {

    render() {

        const { stackName, stackComponent } = this.props;

        // console.log("props");
        // console.log(stackName);
        // console.log(stackComponent);

        return (
            <Stack.Navigator>
                <Stack.Screen
                    name={stackName}
                    component={stackComponent}
                    options={{
                        headerStyle: {
                            backgroundColor: '#2c3e50'
                        },
                        headerTitle: <Text
                            style={[styles.text, { fontSize: 18, color: 'white' }]}
                        >
                            {stackName}
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
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 16
    }
})