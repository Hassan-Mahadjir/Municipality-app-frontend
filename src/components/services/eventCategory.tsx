import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';
// For TypeScript
interface NewsCategoryProps {
	item: string;
	selectedCategory: string | null;
	setSelectedCategory: (category: string) => void;
}

const EventCategory: React.FC<NewsCategoryProps> = ({
	item,
	selectedCategory,
	setSelectedCategory,
}) => {
	return (
		<TouchableOpacity onPress={() => setSelectedCategory(item)}>
			<View
				style={[
					styles.categoryContainer,
					selectedCategory === item && { borderColor: COLORS.primary },
				]}
			>
				<Text
					style={[
						styles.categoryName,
						selectedCategory === item && { color: COLORS.primary },
					]}
				>
					{item}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default EventCategory;
const styles = StyleSheet.create({
	categoryContainer: {
		borderWidth: 1,
		borderColor: COLORS.gray,
		borderRadius: scale(15),
		backgroundColor: '#fff',
		paddingHorizontal: scale(15),
		paddingVertical: verticalScale(7),
		marginHorizontal: scale(5),
	},
	categoryName: {
		fontSize: moderateScale(16),
		textAlign: 'center',
		color: COLORS.gray,
	},
});
