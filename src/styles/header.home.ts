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
	temprtureText: {
		fontSize: 42,
		fontWeight: 'bold',
		color: '#fff',
	},
	temprtureStatus: {
		color: '#fff',
	},
	weatherContainer: {
		alignItems: 'center',
		marginTop: verticalScale(5),
	},
	weatherWrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		marginTop: verticalScale(5),
	},
	modalBackground: {
		flex: 1,
		backgroundColor: 'rgb(0,0,0,0.5)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	ModalContainer: {
		width: '80%',
		backgroundColor: '#fff',
		paddingHorizontal: scale(20),
		paddingVertical: verticalScale(20),
		borderRadius: scale(20),
		elevation: 10,
	},
	modalHeader: {
		width: '100%',
		height: verticalScale(40),
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	modalText: {
		fontSize: 18,
	},
	modalItem: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: scale(95),
	},
});
