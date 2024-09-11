import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '@/styles/card';
import React from 'react';
import { scale } from 'react-native-size-matters';
import { router } from 'expo-router';

type NewsData = {
	id: number;
	text: string;
	imageurl: string;
	type: string;
};

interface CardProps {
	data: NewsData;
}

const Card: React.FC<CardProps> = ({ data }) => {
	return (
		<View style={{ flex: 1, marginHorizontal: scale(5) }}>
			<Image
				resizeMode='cover'
				source={{ uri: data.imageurl }}
				style={styles.pageImage}
			/>
			<TouchableOpacity
				onPress={() => {
					router.push(`./(news)/${data.id}`);
				}}
			>
				<Text style={styles.imageText} numberOfLines={2}>
					{data.text}
				</Text>
			</TouchableOpacity>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<Text style={styles.typeText}>{data.type}</Text>
				<Text style={styles.agoText}>5m ago</Text>
			</View>
		</View>
	);
};

export default Card;
