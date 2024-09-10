import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
	starImage: {
		height: verticalScale(20),
		width: scale(20),
		marginVertical: verticalScale(10),
		marginLeft: scale(2),
		resizeMode: 'contain'
	},
	starText: {
		fontSize: 18,
		position: 'absolute',
		color: '#4E7E95',
		marginTop: verticalScale(30),
	},
	shadowContainer: {
		height: verticalScale(60),
		alignItems: 'center',
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: -3,
		},
		shadowOpacity: 0.3,
		shadowRadius: 3,
		elevation: 3,
		zIndex: 10,
	},
	clockIcon: {
		height: verticalScale(20),
		width: scale(20),
		position: 'absolute',
		top: verticalScale(10),
		left: scale(15),
		resizeMode: 'contain',
	},
	openText: {
		color: '#F1722A',
		fontSize: 16,
		fontWeight: 'bold',
		position: 'absolute',
		top: verticalScale(10),
		left: scale(40),
	},
	weekText: {
		color: '#F1722A',
		fontSize: 18,
	},
	timeText: {
		color: '#4E7E95',
		fontSize: 16,
	},

	historyText: {
		fontSize: 18,
		color: '#F1722A',
		fontWeight: '600',
		marginLeft: scale(15),
		marginTop: verticalScale(10),
	},
	classicText: {
		flexWrap: 'wrap',
		width: screenWidth - 30,
		fontSize: 16,
		fontWeight: 'normal',
		textAlign: 'justify',
		color: 'black',
		marginLeft: scale(15),
		marginRight: scale(15),
	},
	orangeText: {
		fontSize: 14,
		color: '#F1722A',
		marginLeft: scale(15),
	},
});
