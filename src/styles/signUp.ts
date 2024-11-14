import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';

export const styles = StyleSheet.create({
	title: {
		fontSize: 28,
		textAlign: 'center',
		fontWeight: 'bold',
		paddingTop: scale(5),
	},
	subtitle: {
		fontSize: 12,
		textAlign: 'center',
		color: COLORS.gray,
		paddingTop: scale(2),
		// paddingBottom: 17,
	},
	horizontalLineContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		marginVertical: scale(8),
		marginBottom: scale(10),
	},
	horizontalLine: {
		flex: 1,
		height: 1,
		backgroundColor: COLORS.gray,
	},
	orText: {
		marginHorizontal: 10,
	},
	googleButton: {
		borderWidth: 1,
		borderColor: COLORS.primary,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	googleText: {
		color: COLORS.primary,
		marginLeft: 10,
	},
	signupContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignSelf: 'center',
		marginTop: scale(3),
	},
	noAccountText: {
		color: COLORS.gray,
	},
	signupText: {
		color: COLORS.primary,
		textDecorationLine: 'underline',
	},
	icon: {
		width: 20,
		height: 20,
	},
	buttonContainer: {
		height: scale(30),
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: scale(10),
		width: '100%',
		borderRadius: scale(10),
		flexDirection: 'row',
	},
	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: scale(5),
	},
	checkboxLabel: {
		fontSize: 14,
		color: '#000',
	},
	link: {
		color: COLORS.primary,
		textDecorationLine: 'underline',
	},
});
