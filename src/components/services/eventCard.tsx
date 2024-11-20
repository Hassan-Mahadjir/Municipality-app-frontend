import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { router } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

type NewsData = {
	id: number;
	text: string;
	imageurl: string;
	type: string;
	date: string;
	time: string;
};

interface CardProps {
	data: NewsData;
}

const Card: React.FC<CardProps> = ({ data }) => {
	return (
		<View
			style={{
				flex: 1,
				marginHorizontal: scale(5),
				backgroundColor: '#fff',
				padding: scale(5),
				borderRadius: scale(10),
			}}
		>
			<TouchableOpacity
				onPress={() => {
					router.push(`./eventDetail/${data.id}`);
				}}
			>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ width: '50%' }}>
						<Text numberOfLines={3} style={styles.imageText}>
							This game is the game of the centure where the best two team in
							Northern Cyprus.
						</Text>

						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: verticalScale(5),
							}}
						>
							<Fontisto name='date' size={20} color={COLORS.primary} />
							<Text style={{ marginLeft: scale(5) }}>{data.date}</Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: verticalScale(5),
							}}
						>
							<FontAwesome6 name='clock' size={20} color={COLORS.primary} />
							<Text style={{ marginLeft: scale(5) }}>{data.time}</Text>
						</View>
					</View>
					<Image
						resizeMode='cover'
						source={{ uri: data.imageurl }}
						style={styles.pageImage}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default Card;
export const styles = StyleSheet.create({
	pageImage: {
		height: verticalScale(80),
		width: '45%',
		borderRadius: scale(10),
		marginLeft: scale(10),
	},
	imageText: {
		fontSize: moderateScale(13),
		color: COLORS.secondary,
		textAlign: 'justify',
		marginTop: verticalScale(5),
	},
});
