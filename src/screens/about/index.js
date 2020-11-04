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

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.navigation.setParams({
        //     showMenu: this.showMenu
        // });
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
            </View>
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
                                <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
                                <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
                                <MenuItem onPress={hideMenu} disabled>
                                    Menu item 3
                                </MenuItem>
                                <MenuDivider />
                                <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
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