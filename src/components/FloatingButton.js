import React from 'react';
import { TouchableWithoutFeedback, Animated, StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export function FloatingButton(props) {

    const animation = new Animated.Value(0);

    const toggleMenu = () => {
        const toValue = this.open ? 0 : 1;

        Animated.spring(animation, {
            toValue,
            friction: 5
        }).start();

        this.open = !this.open;
    }

    return (
        <View style={[styles.container, props.style]}>

            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.secondary]}>
                    <Icon
                        size={20}
                        color="white"
                        type="material"
                        name="notifications"
                    />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.secondary]}>
                    <Icon
                        size={20}
                        color="white"
                        type="material"
                        name="notifications"
                    />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.secondary]}>
                    <Icon
                        size={20}
                        color="white"
                        type="material"
                        name="notifications"
                    />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={toggleMenu}>
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
}

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        position: "absolute"
    },
    buttons: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: "center",
        justifyContent: "center",
        shadowRadius: 10,
        shadowColor: "#2c3e50",
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 }
    },
    menu: {
        backgroundColor: "#2c3e50"
    },
    secondary: {
        position: "absolute",
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: "#fff"
    }
});

export default FloatingButton;