import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';

export const styles = StyleSheet.create({
	title: {
		fontSize: 28,
		textAlign: 'center',
		fontWeight: 'bold',
		paddingTop: scale(15),
	},
	subtitle: {
		fontSize: 14,
		textAlign: 'center',
		color: COLORS.gray,
		paddingTop: scale(10),
		paddingBottom: scale(8),
	},
	email: {
		fontSize: 16,
		textAlign: 'center',
		color: COLORS.primary,
		paddingBottom: scale(20),
	},
	noOTPText: {
		fontSize: 15,
		textAlign: 'center',
	},
	resendText: {
		fontSize: 15,
		textAlign: 'center',
		color: COLORS.primary,
		textDecorationLine: 'underline',
		paddingBottom: scale(25),
		paddingTop: scale(5),
	},
});
