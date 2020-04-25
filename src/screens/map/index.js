import React from 'react';

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import StackNavigator from '../../navigators/stack';

import { styles } from './style';

class MapScreen extends React.Component {

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

export default function StackMapScreen({ navigation }) {
    console.log(navigation);
    return (
        <StackNavigator stackName="Map" stackComponent={MapScreen} />
    )
}