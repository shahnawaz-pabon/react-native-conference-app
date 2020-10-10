import React from 'react';

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import StackNavigator from '../../navigators/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './style';

import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

class AboutScreen extends React.Component {

    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.navigation.setParams({
            showMenu: this.showMenu
        });
        // console.log(this.props.navigation);
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
                    This is AboutScreen
              </Text>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Menu
                        ref={this.setMenuRef}
                    // button={<Text onPress={this.showMenu}>Show menu</Text>}
                    >
                        <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
                        <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
                        <MenuItem onPress={this.hideMenu} disabled>
                            Menu item 3
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
                    </Menu>
                </View>
            </View>
        );
    }

}

const Stack = createStackNavigator();

function StackAboutScreen() {
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
                        <TouchableOpacity style={{ marginRight: 15 }} onPress={() => {
                            // navigation.openDrawer();

                            // const { params } = navigation.state;
                            // navigation.getParam('showMenu')();

                            console.log("navigation.params");
                            console.log(navigation.params);

                        }}>
                            <Icon name="ios-more" color="#fff" size={32} />
                        </TouchableOpacity>
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