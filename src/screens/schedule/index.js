import React from 'react';

import {
    View,
    Text
} from 'react-native';

import StackNavigator from '../../navigators/stack';

import { styles } from './style';

class ScheduleScreen extends React.Component {

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

export default function StackScheduleScreen({ navigation }) {
    console.log(navigation);
    return (
        <StackNavigator stackName="Schedule" stackComponent={ScheduleScreen} />
    )
}