import React from 'react';
import { TouchableWithoutFeedback, Animated, StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default function FloatingButton(props) {

    const animation = new Animated.Value(0);

    const toggleMenu = () => {
        const toValue = this.open ? 0 : 1;

        Animated.spring(animation, {
            toValue,
            friction: 5
        }).start();

        // this.open = !this.open;
    }

    const rotation = {
        transform: [
            {
                rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "45deg"]
                })
            }
        ]
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
                <Animated.View style={[styles.button, styles.menu, rotation]}>
                    <Icon
                        size={24}
                        color="black"
                        type="font-awesome-5"
                        name="plus"
                    />
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        backgroundColor: "#2c3e50"
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
        // backgroundColor: "#F02A4B"
    },
    secondary: {
        position: "absolute",
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: "#fff"
    }
});