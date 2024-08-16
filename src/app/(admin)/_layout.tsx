import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

export default function adminLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="appointment" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
