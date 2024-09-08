import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Dimensions, SafeAreaView } from "react-native";
import OnboardingScreen from "./screens/onboardingScreen";

const width = Dimensions.get("window").width;
export default function App() {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <OnboardingScreen />
            </SafeAreaView>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        alignItems: "center",
        justifyContent: "center",
    },
});
