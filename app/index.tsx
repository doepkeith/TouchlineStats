import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet, Image, Platform, Dimensions, Appearance} from 'react-native';
import { router } from 'expo-router';

export const userColorScheme = Appearance.getColorScheme();

export default function Index() {
    return (
        <SafeAreaView style={[styles.container, (userColorScheme === 'light' ? styles.defaultLight : styles.defaultDark)]}>
            <Image 
                style={(Platform.OS === 'ios' || Platform.OS === 'android') ? styles.imagePhone : styles.image}
                source={require('../assets/images/TouchlineStatsLogo.png')}
            />
            <Button 
                title={"Login"}
                onPress={() => router.push("/login")} />
        </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    defaultLight: {
        backgroundColor: "white",
    },
    defaultDark: {
        backgroundColor: "gray",
    },
    defaultDarkText: {
        color: "white",
        fontWeight: "900",
        fontSize: 100
    },
    defaultLightText: {
        color: "black",
        fontWeight: "900",
        fontSize: 100
    },
    image: {
        height: 500,
        width: 500,
        resizeMode: 'contain'
    },
    imagePhone: {
        width: (Dimensions.get('window').width - 10),
        height: (Dimensions.get('window').width - 10),
        resizeMode: 'contain'
    }
});
