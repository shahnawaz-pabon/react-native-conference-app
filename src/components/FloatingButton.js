import React from 'react';
import { TouchableWithoutFeedback, Animated, StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const FloatingButton = () => (
    <View style={styles.container}>
        <Text>Button</Text>
    </View>
)

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default FloatingButton;