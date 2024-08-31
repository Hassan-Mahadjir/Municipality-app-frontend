import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
	container: {
		height: verticalScale(100),
	},
	headerImage: {
		width: '100%',
		height: verticalScale(100),
	},
	headerText: {
		position: 'absolute',
		top: verticalScale(40),
		left: scale(70),
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	linearGradient: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
	arrowImage: {
		height: verticalScale(20),
		width: scale(25),
	},
	arrowContainer: {
		position: 'absolute',
		top: verticalScale(40),
		left: scale(10),
		width: scale(40),
		height: verticalScale(40),
		justifyContent: 'center',
		alignItems: 'center',
	},
	pageImage: {
		height: verticalScale(175),
		width: scale(330),
		borderRadius: 10,
		marginLeft: scale(10),
	},
	imageText: {
		fontSize: 25,
		fontWeight: '600',
		marginLeft: scale(10),
		color: '#4E7E95',
	},
});
