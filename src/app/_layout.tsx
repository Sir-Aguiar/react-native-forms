import { Slot, Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";

export default function Layout() {
  return (
    <NativeBaseProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </NativeBaseProvider>
  );
}
