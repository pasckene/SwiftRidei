import { View, Button } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const { signOut } = useAuth();
  const router = useRouter();

  return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ marginBottom: 20 }}>
          <Button title="Go to Home" onPress={() => router.push("/(root)/(tabs)/home")} />
        </View>
      <Button
        title="Sign Out"
        onPress={async () => {
          await signOut();
          router.replace("/sign-in");
        }}
      />
    </SafeAreaView>
  )
}

export default Profile