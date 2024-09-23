import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="teamsHome" options={{headerShown: false}}/>
        </Stack>
    )
}
