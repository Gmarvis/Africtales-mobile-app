import { ImageBackground, View, StyleSheet, Dimensions } from "react-native";

const image = require("../assets/images/bg-image.png");
const width = Dimensions.get("window").width;
import Animated, { SharedValue } from "react-native-reanimated";

type PropTypes = {
    currentIndex: SharedValue<number>;
    length: number;
    flatListRef: any;
};

/**
 * implementing onboarding screen with react native reanimated
 *
 * see link below for reference
 * {@link https://medium.com/@gm_99/building-a-beautiful-onboarding-section-with-react-native-reanimated-39b7eec94892}
 */

const pages = [
    {
        text: "Welcome to AfricTales Discover inspiring African stories with AI",
        image: require("../assets/images/onboard-image-1.png"),
    },
    {
        text: "Build Quality family time with motivating African stories",
        image: require("../assets/images/onboard-image-2.png"),
    },
    {
        text: "Learn about African history, culture, and values through engaging stories",
        image: require("../assets/images/onboard-image-3.png"),
    },
];

export default function OnboardingScreen() {
    return (
        <View>
            <ImageBackground
                source={image}
                style={styles.image}
            ></ImageBackground>
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
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "stretch",
        width: width,
    },
});
