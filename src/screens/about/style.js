import {
    StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
    text: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 14,
        color: '#fff'
    },
    scroll: {
        backgroundColor: 'white',
    },
    container: {
        flex: 1
    },
    header: {
        backgroundColor: "#2c3e50",
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
    },
    logoName: {
        fontSize: 18,
    },
    listItemContainer: {
        height: 55,
        borderWidth: 0.5,
        borderColor: '#ECECEC',
    },
    listTitleStyle: {
        fontFamily: "Ubuntu-Bold",
        paddingLeft: 10,
        fontSize: 15
    }
})