import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function userAppointmentLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
