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

const NewsCategory: React.FC<NewsCategoryProps> = ({
	item,
	selectedCategory,
	setSelectedCategory,
}) => {
	return (
		<TouchableOpacity onPress={() => setSelectedCategory(item)}>
			<Text
				style={[
					styles.categoryName,
					selectedCategory === item && { color: COLORS.primary },
				]}
			>
				{item}
			</Text>
		</TouchableOpacity>
	);
};

export default NewsCategory;
const styles = StyleSheet.create({
	categoryName: {
		fontSize: moderateScale(16),
		marginHorizontal: scale(5),
		textAlign: 'center',
		color: COLORS.gray,
		paddingHorizontal: scale(15),
		paddingVertical: verticalScale(7),
		borderRadius: scale(10),
		backgroundColor: '#fff',
	},
});
