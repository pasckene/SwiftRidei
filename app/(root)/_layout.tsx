import {ClerkProvider, ClerkLoaded} from '@clerk/clerk-expo';
import * as AuthSession from "expo-auth-session";
// import { tokenCache } from '@clerk/clerk-expo/token-cache'

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { tokenCache } from "@/lib/auth";


export default function RootLayout() {

// Prevent the splash screen from auto-hiding before asset loading is complete.


  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env",
  );
}

  

  return (
    <ClerkProvider tokenCache={tokenCache}
      publishableKey={publishableKey}
      > 
      <ClerkLoaded>
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(root)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
        </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
