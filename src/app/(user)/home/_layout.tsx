import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function UserHomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="tourism" options={{ headerShown: false }} />
    </Stack>
  );
}
