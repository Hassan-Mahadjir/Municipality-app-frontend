import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
	servicesContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
		marginHorizontal: scale(10),
		marginBottom: verticalScale(8),
	},
	container: {
		width: scale(160),
		height: verticalScale(125),
		borderRadius: scale(10),
		marginTop: verticalScale(10),
		overflow: 'hidden',
	},
	linearGradientSyley: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		borderRadius: verticalScale(10),
	},
	serviceName: {
		position: 'absolute',
		top: '38%',
		marginLeft: scale(10),
		fontSize: moderateScale(24),
		fontWeight: 'bold',
		color: '#fff',
		width: '85%',
		textAlign: 'center',
		textShadowColor: '#000',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 3,
	},
	imageStyle: {
		borderRadius: scale(10),
	},
	detailsContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		position: 'absolute',
		gap: scale(60),
		top: verticalScale(85),
		marginHorizontal: '5%',
	},
	touchDetails: {},
	detailsBackground: {
		backgroundColor: COLORS.secondary,
		width: scale(145),
		height: verticalScale(35),
		position: 'absolute',
		top: verticalScale(80),
		marginHorizontal: scale(10),
		borderRadius: scale(10),
		opacity: 0.6,
	},
	detialsText: {
		color: '#fff',
		fontSize: moderateScale(16),
		marginLeft: scale(8),
		marginTop: verticalScale(3),
	},
});
