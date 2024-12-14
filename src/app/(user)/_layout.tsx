import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

export default function userLayout() {
	const { t } = useTranslation();
	return (
		<Tabs
			// used to change default backgroundColor
			// sceneContainerStyle={{ backgroundColor: "#fff" }}
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
          tabBarLabel: t('home'), // Use the translated string here
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={moderateScale(22)} color={color} />
          ),
        }}
      />
			<Tabs.Screen
				name='appointment'
				options={{
					tabBarLabel: t('app'),
					tabBarIcon: ({ color }) => (
						<Fontisto name='date' size={moderateScale(22)} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='report'
				options={{
					tabBarLabel: t('report'),
					tabBarIcon: ({ color }) => (
						<Ionicons
							name='alert-circle-outline'
							size={moderateScale(24)}
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name='profile'
				options={{
					tabBarLabel: t('profile'),
					tabBarIcon: ({ color }) => (
						<Octicons name='person' size={moderateScale(24)} color={color} />
					),
				}}
			/>
			<Tabs.Screen name='index' options={{ href: null }} />
		</Tabs>
	);
}
