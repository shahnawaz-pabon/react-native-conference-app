import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import { styles } from './style';

export default class MapScreen extends React.Component {

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