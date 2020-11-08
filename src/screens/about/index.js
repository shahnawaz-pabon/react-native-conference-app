import React from 'react';

import {
    ScrollView,
    View,
    Text,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import StackNavigator from '../../navigators/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './style';

import InfoText from '../../components/InfoText';

import DateTimePicker from '@react-native-community/datetimepicker';

import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

class AboutScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(1598051730000),
            mode: 'date',
            show: false
        }
    }

    componentDidMount() {
        // this.props.navigation.setParams({
        //     showMenu: this.showMenu
        // });
        // console.log(this.props.navigation);
    }

    showMode = (currentMode) => {
        this.setState({
            show: true,
            mode: currentMode
        });
    };

    onChange = (event, selectedDate) => {
        const currentDate = selectedDate || this.state.date;
        this.setState({
            date: currentDate,
            show: false
        });

        console.log(this.state.date);
    };

    showDatepicker = () => {
        this.showMode('date');
    };

    render() {
        return (

            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.headerContent}>
                            <Image style={styles.avatar}
                                source={require('../../../assets/images/icon.png')} />
                            <Text style={{ ...styles.text, ...styles.logoName }}>React Native</Text>
                        </View>
                    </View>

                    <View>
                        <InfoText text="React Native Conference" />

                        <Button onPress={this.showDatepicker} title="Show date picker!" />

                        {this.state.show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={this.state.date}
                                mode={this.state.mode}
                                is24Hour={true}
                                display="default"
                                onChange={this.onChange}
                            />
                        )}
                    </View>
                </View>
            </ScrollView>
        );
    }

}

const Stack = createStackNavigator();

function StackAboutScreen() {

    var _menu = null;

    const setMenuRef = ref => {
        _menu = ref;
    };

    const hideMenu = () => {
        _menu.hide();
    };

    const showMenu = () => {
        _menu.show();
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="About"
                component={AboutScreen}
                options={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: '#2c3e50',
                    },
                    headerTintColor: '#fff',
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    //     fontFamily: 'Ubuntu-Bold'
                    // },
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => {
                            navigation.openDrawer();
                        }}>
                            <Icon name="md-list-box" color="#fff" size={32} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Menu
                                ref={setMenuRef}
                                button={
                                    <TouchableOpacity
                                        style={{ marginRight: 15 }}
                                        onPress={showMenu}
                                    >
                                        <Icon name="ios-more" color="#fff" size={32} />
                                    </TouchableOpacity>
                                }
                            >
                                <MenuItem textStyle={[styles.text, { color: '#000' }]} onPress={hideMenu}>Learn React Native</MenuItem>
                                <MenuDivider />
                                <MenuItem textStyle={[styles.text, { color: '#000' }]} onPress={hideMenu}>Docs</MenuItem>
                                <MenuDivider />
                                <MenuItem textStyle={[styles.text, { color: '#000' }]} onPress={hideMenu}>Components</MenuItem>
                                <MenuDivider />
                                <MenuItem textStyle={[styles.text, { color: '#000' }]} onPress={hideMenu}>Blog</MenuItem>
                                <MenuDivider />
                                <MenuItem textStyle={[styles.text, { color: '#000' }]} onPress={hideMenu}>Support</MenuItem>
                            </Menu>
                        </View>
                    ),
                    // headerTitle instead of title
                    headerTitle: () => <Text style={[styles.text, { fontSize: 20 }]}>About</Text>,
                })}
            />
        </Stack.Navigator>
    );
}

export default StackAboutScreen;

// export default function StackAboutScreen({ navigation }) {
//     console.log(navigation);
//     return (
//         <StackNavigator stackName="About" stackComponent={AboutScreen} />
//     )
// }