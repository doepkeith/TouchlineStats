import {View, SafeAreaView, Text, Button} from 'react-native';
import { router } from 'expo-router';
import { styles, userColorScheme } from './index';

export default function Login(){
    return(
        <SafeAreaView style={[styles.container, (userColorScheme === 'light' ? styles.defaultLight : styles.defaultDark)]}>
            <Text style={(userColorScheme === 'light' ? styles.defaultLightText : styles.defaultDarkText)}>
                Login Screen
            </Text>
            <Button
                title={ "Back"}
                onPress={() => router.dismiss()}
            />
            <Button 
                title={ "Teams" }
                onPress={() => router.push("/teams/teamsHome")}
            />
        </SafeAreaView>
    )
}
