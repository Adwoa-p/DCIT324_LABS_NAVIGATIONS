import { Stack } from 'expo-router';
import { ProfileProvider } from '../context/ProfileContext';

export default function RootLayout() {
  return (
    <ProfileProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" />
        <Stack.Screen name="(drawer)" />
        <Stack.Screen
          name="edit-profile"
          options={{
            headerShown: true,
            title: 'Edit Profile',
            presentation: 'modal',
          }}
        />
      </Stack>
    </ProfileProvider>
  );
}