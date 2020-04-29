import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator, HeaderStyleInterpolators, Header } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class StackNavigator extends React.Component {

    render() {

        const { stackName, stackComponent } = this.props;

        // console.log("props");
        // console.log(stackName);
        // console.log(stackComponent);

        return (
            <Stack.Navigator
                // headerMode="screen"
                headerMode="float"
                // screenOptions={{
                //     headerTintColor: 'white',
                //     headerStyle: { backgroundColor: 'tomato' },
                    
                // }}

            >
                <Stack.Screen
                    name={stackName}
                    component={stackComponent}
                
                    options={{
                        title: stackName,
                        headerStyle: {
                            height: 50,
                            backgroundColor: '#2c3e50',
                        },
                        headerTitleAlign: "center",
                        // header: 'null',
                        animationEnabled: false,
                        headerStyleInterpolator: HeaderStyleInterpolators.forNoAnimation,
                        // header: null,
                        // title: 'Baal'
                        // headerTransparent: true,
                        // animationEnabled: false,
                        // header: null,
                        // headerStyle: {
                        //     backgroundColor: '#2c3e50'
                        // },
                        headerTitle: <Text
                            style={[styles.text, { fontSize: 18, color: 'white' }]}
                        >
                            {stackName}
                        </Text>,
                        // headerLeft: () => (
                        //     <TouchableOpacity
                        //         onPress={() => {
                        //             console.log("Clicked");
                        //         }}
                        //         style={{
                        //             marginLeft: 30
                        //         }}
                        //     >
                        //         <Icon name="th-list" color="white" size={22} />
                        //     </TouchableOpacity>

                        // ),
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