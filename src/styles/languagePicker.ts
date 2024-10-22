import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		// marginTop: verticalScale(300),
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalContent: {
		width: '95%',
		padding: scale(5),
		backgroundColor: 'white',
		paddingVertical: verticalScale(10),
		borderRadius: scale(15),
		// Add shadow
		shadowColor: '#000',
		shadowOffset: { width: 0, height: -2 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 2, // for Android
	},
	closeButtonText: {
		color: '#fff',
		fontSize: 16,
	},
	closeButton: {
		marginTop: 10,
		padding: 10,
		backgroundColor: '#007BFF',
		borderRadius: 8,
		alignItems: 'center',
	},
});
