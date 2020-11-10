import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'black',
        borderColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1,
        height: 34,
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: -10,
        width: 34,
    },
})

const CustomIcon = ({ containerStyle, icon, iconColor }) => (
    <View style={[styles.container, containerStyle]}>
        <Icon
            size={24}
            color={iconColor ? iconColor : "white"}
            type="material"
            name="notifications"
            {...icon}
        />
    </View>
)

export default CustomIcon