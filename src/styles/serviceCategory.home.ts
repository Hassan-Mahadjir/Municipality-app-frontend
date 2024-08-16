import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
	servicesContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
		marginHorizontal: scale(10),
		marginBottom: verticalScale(10),
	},
	container: {
		width: scale(160),
		height: verticalScale(135),
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
		top: '25%',
		marginLeft: scale(10),
		fontSize: 28,
		fontWeight: 'bold',
		color: '#fff',
		width: '80%',
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
		gap: scale(73),
		top: '73%',
		marginHorizontal: '5%',
	},
	touchDetails: {},
	detailsBackground: {
		backgroundColor: COLORS.secondary,
		width: '90%',
		height: verticalScale(35),
		position: 'absolute',
		top: '70%',
		marginHorizontal: '5%',
		borderRadius: scale(10),
		opacity: 0.6,
	},
	detialsText: {
		color: '#fff',
		fontSize: 16,
		marginLeft: scale(8),
		marginTop: verticalScale(3),
	},
});
