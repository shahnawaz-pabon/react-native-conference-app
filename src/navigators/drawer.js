import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

// import ScheduleScreen from '../schedule';
import SpeakerScreen from '../screens/speakers';
import MapScreen from '../screens/map';
import AboutScreen from '../screens/about';
import TabScreen from './tabs';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 14
    },
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20,
    },
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 150 / 2,
    },
});

export class CustomDrawerComponent extends React.Componect {

    constructor(props) {
        super(props);
        //Setting up the Main Top Large Image of the Custom Sidebar
        this.proileImage =
            'https://randomuser.me/api/portraits/men/75.jpg';
        //Array of the sidebar navigation option with icon and screen to navigate
        //This screens can be any screen defined in Drawer Navigator in App.js
        //You can find the Icons from here https://material.io/tools/icons/
        this.items = [
            {
                navOptionThumb: 'camera',
                navOptionName: 'First Screen',
                screenToNavigate: 'NavScreen1',
            },
            {
                navOptionThumb: 'image',
                navOptionName: 'Second Screen',
                screenToNavigate: 'NavScreen2',
            },
            {
                navOptionThumb: 'build',
                navOptionName: 'Third Screen',
                screenToNavigate: 'NavScreen3',
            },
        ];
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* <View>
                    <Image source={{ 'uri': 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg' }} />
                </View> */}
                <ScrollView>
                    <View style={styles.sideMenuContainer}>
                        {/*Top Large Image */}
                        <Image
                            source={{ uri: this.proileImage }}
                            style={styles.sideMenuProfileIcon}
                        />
                        {/*Divider between Top Image and Sidebar Option*/}
                        <View
                            style={{
                                width: '100%',
                                height: 1,
                                backgroundColor: '#e2e2e2',
                                marginTop: 15,
                            }}
                        />
                        {/*Setting up Navigation Options from option array using loop*/}
                        <View style={{ width: '100%' }}>
                            {this.items.map((item, key) => (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
                                    }}
                                    key={key}>
                                    <View style={{ marginRight: 10, marginLeft: 20 }}>
                                        <Icon name={item.navOptionThumb} size={25} color="#808080" />
                                    </View>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            color: global.currentScreenIndex === key ? 'red' : 'black',
                                        }}
                                        onPress={() => {
                                            global.currentScreenIndex = key;
                                            this.props.navigation.navigate(item.screenToNavigate);
                                        }}>
                                        {item.navOptionName}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>
        )
    }
}

const Drawer = createDrawerNavigator({
    Home: {
        screen: TabScreen,
        navigationOptions: {
            drawerLabel: () => (
                <Text style={styles.text}>Home</Text>
            ),
            drawerIcon: () => (
                <Icon name="ios-briefcase" size={24} />
            )
        }
    }
}, 
    {contentComponent: CustomDrawerComponent},
    // initialRouteName: 'Home',
    // drawerPosition: 'left',
    // contentOptions: {
    //     activeTintColor: '#e91e63',
    // },
);

const DrawerScreen = createAppContainer(Drawer);

export default DrawerScreen;