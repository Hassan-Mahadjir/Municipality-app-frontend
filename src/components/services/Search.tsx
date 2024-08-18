import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { scale, verticalScale } from 'react-native-size-matters';

const SearchField = ({
	placeholder,
	onChangeText,
}: {
	placeholder: string;
	onChangeText: (text: string) => void;
}) => {
	return (
		<View style={styles.searchContainer}>
			{/* Use URI for the search icon image */}
			<Image
				source={{
					uri: 'https://th.bing.com/th/id/OIP._RTO9yp1xH5aQA0vS7fpHAHaHW?rs=1&pid=ImgDetMain',
				}}
				style={styles.icon}
			/>
			<TextInput
				style={styles.searchInput}
				placeholder={placeholder}
				placeholderTextColor='#4E7E95'
				onChangeText={onChangeText}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	searchContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: scale(1), // Scaled border width
		borderColor: COLORS.primary, // Orange border
		borderRadius: scale(25), // Scaled border radius
		padding: scale(10), // Scaled padding
		backgroundColor: '#FFF',
		marginTop: verticalScale(20), // Scaled top margin
		marginLeft: scale(9), // Scaled left margin
		width: '96%',
	},
	icon: {
		width: scale(24), // Increased scaled image width
		height: verticalScale(24), // Increased scaled image height
		marginRight: scale(10), // Scaled right margin
	},
	searchInput: {
		flex: 1,
		fontSize: scale(14), // Scaled font size
		color: COLORS.secondary,
		marginLeft: scale(10), // Scaled left margin
	},
});

export default SearchField;
