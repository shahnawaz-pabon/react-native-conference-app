import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

export function DrawerComponent(props) {

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <Drawer.Section
                        title={<Text style={[styles.drawerItemLabel, styles.sectionTitle]}>CONFERENCE</Text>}
                        style={styles.drawerSection}
                    >
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="ios-home"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            labelStyle={styles.drawerItemLabel}
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                    </Drawer.Section>
                    <Drawer.Section
                        title={<Text style={[styles.drawerItemLabel, styles.sectionTitle]}>ACCOUNT</Text>}
                        style={styles.drawerSection}
                    >
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="md-log-in"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Login"
                            labelStyle={styles.drawerItemLabel}
                            onPress={() => { console.log("Login") }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="ios-person-add"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="SignUp"
                            labelStyle={styles.drawerItemLabel}
                            onPress={() => { console.log("SignUp") }}
                        />
                    </Drawer.Section>
                    <Drawer.Section title={<Text style={[styles.drawerItemLabel, styles.sectionTitle]}>PREFERENCES</Text>}>
                        <TouchableRipple onPress={() => { console.log("Pressed") }}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    drawerSection: {
        marginTop: 15
    },
    drawerItemLabel: {
        fontFamily: "Ubuntu-Bold"
    },
    sectionTitle: {
        letterSpacing: 2,
        fontSize: 14
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});