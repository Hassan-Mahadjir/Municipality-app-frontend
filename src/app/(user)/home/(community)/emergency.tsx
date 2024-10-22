import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';

const info = [
	{
		id: 1,
		name: 'Police',
		number: 911,
	},
	{
		id: 2,
		name: 'Fire Service',
		number: 910,
	},
];
const emergency = () => {
	const { t } = useTranslation();
	const emergencyContact= t('Emergency Contact');
	
	return (
		<View>
			<Stack.Screen options={{ title: t('emergencyContact') }} />
			<FlatList
				data={info}
				style={{ marginTop: verticalScale(20) }}
				contentContainerStyle={{
					gap: scale(10),
					paddingBottom: verticalScale(100),
				}}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<View style={styles.container}>
						<View
							style={{ flexDirection: 'row', justifyContent: 'space-between' }}
						>
							<Feather name='phone-call' size={24} color={COLORS.primary} />
							<Text style={styles.text}>{item.name}</Text>
							<Text style={styles.text}>{item.number}</Text>
						</View>
					</View>
				)}
			/>
		</View>
	);
};

export default emergency;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		marginHorizontal: scale(10),
		padding: scale(7),
		borderRadius: scale(10),
		shadowColor: '#000',
		shadowOffset: { width: 0, height: verticalScale(2) },
		shadowOpacity: 0.1,
		shadowRadius: scale(4),
		elevation: 2,
	},
	text: {
		marginHorizontal: scale(10),
		fontSize: moderateScale(16),
		color: COLORS.secondary,
	},
});
