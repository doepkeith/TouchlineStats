import React from 'react';
import { SafeAreaView, Text, Image, Platform, Pressable } from "react-native";
import { styles, userColorScheme } from '../';
import { router } from 'expo-router';

export default function teamsHome() {
    return (
        <SafeAreaView style={[styles.container, (userColorScheme === 'light' ? styles.defaultLight : styles.defaultDark)]}>
            <Image 
                style={(Platform.OS === 'ios' || Platform.OS === 'android') ? styles.imagePhone : styles.image}
                source={require('../../assets/images/TouchlineStatsLogo.png')}
            />
            <Pressable onPress={() => router.back()}>
                <Text>
                    Teams Home Page
                </Text>
            </Pressable>
        </SafeAreaView>
    )
};
