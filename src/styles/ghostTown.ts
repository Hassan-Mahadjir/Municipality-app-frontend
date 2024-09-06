import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
	starImage: {
		height: verticalScale(20),
		width: scale(20),
		marginVertical: verticalScale(10),
		marginLeft: scale(5),
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
		height: verticalScale(30),
		width: scale(30),
		position: 'absolute',
		top: verticalScale(10),
		left: scale(10),
	},
	openText: {
		color: '#F1722A',
		fontSize: 20,
		fontWeight: 'bold',
		position: 'absolute',
		top: verticalScale(10),
		left: scale(45),
	},
	weekText1: {
		color: '#F1722A',
		fontSize: 18,
		position: 'absolute',
		top: verticalScale(40),
		paddingRight: scale(200),
	},
	weekText2: {
		color: '#F1722A',
		fontSize: 18,
		position: 'absolute',
		top: verticalScale(40),
		paddingLeft: scale(200),
	},
	timeText1: {
		color: '#4E7E95',
		fontSize: 18,
		position: 'absolute',
		top: verticalScale(60),
		paddingRight: scale(175),
	},
	timeText2: {
		color: '#4E7E95',
		fontSize: 18,
		position: 'absolute',
		top: verticalScale(60),
		paddingLeft: scale(175),
	},
	historyText: {
		fontSize: 20,
		color: '#F1722A',
		fontWeight: '600',
		marginLeft: scale(15),
		marginTop: verticalScale(10),
	},
	classicText: {
		flexWrap: 'wrap',
		width: screenWidth - 20,
		fontSize: 20,
		fontWeight: 'normal',
		color: 'black',
		marginLeft: 15,
		marginRight: 4,
	},
	orangeText: {
		fontSize: 18,
		color: '#F1722A',
		marginLeft: 15,
	},
});
