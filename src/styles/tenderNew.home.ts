import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
	sectionTitle: {
		color: COLORS.primary,
		paddingTop: verticalScale(5),
	},
	linearGradientStyle: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		borderRadius: scale(10),
	},
	description: {
		position: 'absolute',
		top: verticalScale(110),
		marginLeft: scale(10),
		fontWeight: 'bold',
		color: '#fff',
		width: '80%',
	},
	readMore: {
		position: 'absolute',
		right: '5%',
		bottom: '6%',
	},
	dotContainer: {
		flexDirection: 'row',
		marginTop: verticalScale(5),
		alignSelf: 'center',
	},
	dot: {
		marginHorizontal: 2,
		width: scale(10),
		height: verticalScale(10),
		borderRadius: 5,
	},
	activeDot: {
		backgroundColor: COLORS.primary,
		width: scale(25),
		height: verticalScale(10),
	},
	inactiveDot: {
		backgroundColor: 'white',
	},
});
