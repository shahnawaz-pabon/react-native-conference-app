import React from 'react';

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import StackNavigator from '../../navigators/stack';

import { styles } from './style';

export default class SpeakerScreen extends React.Component {

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

// export default function StackSpeakerScreen({ navigation }) {
//     console.log(navigation);
//     return (
//         <StackNavigator stackName="Speakers" stackComponent={SpeakerScreen} />
//     )
// }