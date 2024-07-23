import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function userLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#F64D00',
        tabBarBackground: () => (
          <View style={{ backgroundColor: '#fff', flex: 1 }}></View>
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="appointment"
        options={{
          tabBarLabel: 'Appointment',
          tabBarIcon: ({ color }) => (
            <Fontisto name="date" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Octicons name="person" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="index" options={{ href: null }} />
    </Tabs>
  );
}
