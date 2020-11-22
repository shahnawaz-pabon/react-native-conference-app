import React from 'react';
import { TouchableWithoutFeedback, Animated, StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const FloatingButton = ({ props }) => (
    <View style={[styles.container, props.style]}>
        <TouchableWithoutFeedback>
            <Animated.View style={[styles.button, styles.menu]}>
                <Icon
                    size={24}
                    color="white"
                    type="material"
                    name="notifications"
                />
            </Animated.View>
        </TouchableWithoutFeedback>
    </View>
)

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        position: "absolute"
    },
    buttons: {
        position: "absolute",
        width: 60,
        height: 60
    },
    menu: {
        backgroundColor: "#2c3e50"
    }
});

export default FloatingButton;