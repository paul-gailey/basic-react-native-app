import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native'; // Import View from react-native

// Prevent splash screen from hiding before fonts are loaded
SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            // Hide splash screen once fonts are loaded
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        // Return null to avoid rendering anything until fonts are loaded
        return null;
    }

    return (
        // Wrap Stack inside a View and use onLayout on the outermost container
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <Stack />
        </View>
    );
};

export default Layout;



// import { Stack } from 'expo-router';

// const Layout = () => {
//     return <Stack />;
// }

// export default Layout;