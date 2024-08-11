import {
	Text,
	View,
	Image,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import { scale } from 'react-native-size-matters';

function Verify() {
	const { t } = useTranslation();
	const verified = t('verified');
	const verifiedMsg = t('verifiedMsg');
	const backToSignin = t('backToSignin');

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<Image
					source={{
						uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYInVIiHF4IlVh8fREiBrdi0os47t_S1v3g&s',
					}}
					style={styles.icon}
				/>

				<Text style={styles.title}>Verified</Text>
				<Text style={styles.subtitle}>{verifiedMsg}</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => router.push('./')}
				>
					<Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
						{backToSignin}
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: scale(3),
		padding: scale(5),
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 30,
		textAlign: 'center',
		fontWeight: 'bold',
		paddingTop: scale(10),
		marginTop: scale(20),
	},
	subtitle: {
		fontSize: 18,
		textAlign: 'center',
		color: COLORS.gray,
		paddingTop: scale(10),
		paddingBottom: scale(50),
	},
	icon: {
		width: 150,
		height: 140,
		marginTop: scale(-120),
	},
	button: {
		padding: scale(10),
		backgroundColor: COLORS.primary,
		borderRadius: 10,
	},
});

export default Verify;
