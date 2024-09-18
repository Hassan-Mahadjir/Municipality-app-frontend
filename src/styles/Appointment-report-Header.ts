import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
	userName: {
		fontSize: 20,
		color: '#fff',
		fontWeight: '900',
	},
	greetMsg: {
		fontSize: 20,
		color: '#fff',
	},
	headerContainer: {
		padding: scale(15),
		paddingTop: verticalScale(40),
		backgroundColor: COLORS.secondary,
	},
	subHeaderContianer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
