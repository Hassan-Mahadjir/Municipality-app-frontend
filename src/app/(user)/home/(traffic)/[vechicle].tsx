import { View, Text, StatusBar, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import { verticalScale, scale } from 'react-native-size-matters';

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
				<View>
					<Text>XXXX Red car</Text>
					<Text>Reason for collecting:</Text>
					<Text>
						orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</Text>
					<Text>
						Collectd Date:<Text></Text>
					</Text>
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
});
