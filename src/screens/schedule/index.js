import React from 'react';

import {
    View,
    Text,
  } from 'react-native';

export default class ScheduleScreen extends React.Component {

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
                    This will be your screen when you click Skip from any slide or Done
                    button at last
              </Text>
            </View>
        );
    }

}