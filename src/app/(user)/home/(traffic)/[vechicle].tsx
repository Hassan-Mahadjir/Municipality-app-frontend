import {
	View,
	Text,
	StatusBar,
	Image,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import SubmitButtonComponent from '@/components/SubmitButton';

const vechicle = () => {
	const { vechicle } = useLocalSearchParams();
	return (
		<View>
			<Stack.Screen
				options={{
					title: `${vechicle}`,
					headerStyle: { backgroundColor: '#fff' },
					// '#f4511e'
					headerTintColor: COLORS.primary,
				}}
			/>
			<StatusBar barStyle={'dark-content'} />
			<View>
				<Image
					style={styles.image}
					source={{
						uri: 'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg',
					}}
				/>
				<View style={styles.line}></View>
				<View style={{ margin: scale(10) }}>
					<Text style={styles.keyDiscription}>XXXX Red car</Text>
					<Text style={styles.reason}>Reason for collecting:</Text>
					<Text style={{ textAlign: 'justify' }}>
						orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</Text>
					<Text style={{ marginTop: verticalScale(15), color: COLORS.primary }}>
						Collectd Date: <Text style={{ color: '#000' }}>12/09/2024</Text>
					</Text>
					<View
						style={{
							flexDirection: 'row',
							marginVertical: verticalScale(10),
							marginLeft: scale(-5),
						}}
					>
						<EvilIcons name='location' size={24} color={COLORS.primary} />
						<Text>Famagusta, EMU maingate</Text>
					</View>

					<Text
						style={{ color: COLORS.primary, marginBottom: verticalScale(15) }}
					>
						Fee: <Text style={{ color: '#000' }}>500 TL</Text>
					</Text>

					<SubmitButtonComponent title='Pay Fee' fullWidth onPress={() => {}} />
					<TouchableOpacity>
						<Text style={styles.getCar}>Get your car</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default vechicle;

const styles = StyleSheet.create({
	image: {
		margin: scale(10),
		alignSelf: 'center',
		width: '90%',
		borderRadius: scale(10),
		height: verticalScale(150),
	},
	line: {
		borderBottomWidth: 2,
		borderBottomColor: COLORS.gray,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: verticalScale(2) },
		shadowOpacity: 0.1,
		shadowRadius: scale(4), // Reduced shadow radius
		elevation: 2,
	},
	keyDiscription: {
		fontSize: moderateScale(24),
		fontWeight: '700',
		marginBottom: verticalScale(8),
	},
	reason: {
		color: COLORS.primary,
		marginBottom: verticalScale(5),
	},
	getCar: {
		textAlign: 'center',
		color: COLORS.primary,
		marginTop: verticalScale(5),
	},
});
