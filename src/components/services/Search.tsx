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
		borderRadius: scale(20), // Reduced border radius
		padding: scale(8), // Reduced padding
		backgroundColor: '#FFF',
		marginTop: verticalScale(15), // Reduced top margin
		marginLeft: scale(8), // Reduced left margin
		width: '96%', // Reduced width
	},
	icon: {
		width: scale(22), // Reduced image width
		height: verticalScale(24), // Reduced image height
		marginRight: scale(8), // Reduced right margin
	},
	searchInput: {
		flex: 1,
		fontSize: scale(12), // Reduced font size
		color: COLORS.secondary,
		marginLeft: scale(8), // Reduced left margin
	},
});

export default SearchField;
