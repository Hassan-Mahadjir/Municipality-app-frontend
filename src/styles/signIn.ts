import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';
export const styles = StyleSheet.create({
	title: {
		fontSize: 28,
		textAlign: 'center',
		fontWeight: 'bold',
		paddingTop: scale(10),
	},
	subtitle: {
		fontSize: 20,
		textAlign: 'center',
		color: COLORS.gray,
		paddingTop: scale(10),
		paddingBottom: scale(17),
	},

	horizontalLineContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		marginVertical: scale(15),
	},
	horizontalLine: {
		flex: 1,
		height: 1,
		backgroundColor: '#000',
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
		marginLeft: scale(10),
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
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
		width: '100%',
		borderRadius: 30,
		flexDirection: 'row',
	},
	forgetPassContainer: {
		marginTop: scale(5),
		marginBottom: scale(15),
	},

	forgetPassText: {
		color: COLORS.primary,
		textAlign: 'right',
		textDecorationLine: 'underline',
	},
	webViewContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	webView: {
		flex: 1,
	},
});
