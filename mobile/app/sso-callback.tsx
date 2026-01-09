import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function AuthRoutesLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;

  if (isSignedIn) {
    // redirect to your main tab screen
    return <Redirect href="/(tabs)" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Add a callback screen for SSO redirects */}
      <Stack.Screen name="callback" options={{ headerShown: false }} />
      {/* You can add more auth screens here like SignIn, SignUp */}
    </Stack>
  );
}