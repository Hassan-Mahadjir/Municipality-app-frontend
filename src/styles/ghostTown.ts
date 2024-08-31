import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        height: 200,
    },
    headerImage: {
        width: '100%',
        height: '100%',
    },
    linearGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    headerText: {
        position: 'absolute',
        top: 80,
        left: 100,
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    arrowImage: {
        height: verticalScale(20),
        width: scale(25),
    },
    arrowContainer: {
        position: 'absolute',
        top: 10,
        left: 5,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    starImage: {
        height: 20,
        width: 20,
        marginVertical: 10,
        marginLeft: 5,
    },
    starText: {
        fontSize: 18,
        position: 'absolute',
        color: '#4E7E95',
        marginTop: 30,
    },
    shadowContainer: {
        height: 60,
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
    historyText: {
        marginTop: 50, 
        fontSize: 20, 
        color: "#F1722A", 
        fontWeight: '600',
        marginLeft: 15
    },
    clockIcon: {
        height: 30,
        width: 30,
        position: 'absolute',
        top: 10,
        left: 10,
    },
    openText: {
        color: '#F1722A',
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        top: 10,
        left: 45
    },
    weekText1: {
        color: '#F1722A',
        fontSize: 18,
        position: 'absolute',
        top: 40,
        marginLeft: 50,
        marginRight: 10,
    },
    weekText2: {
        color: '#F1722A',
        fontSize: 18,
        position: 'absolute',
        top: 40,
        marginLeft: 240,
        marginRight: 10,
    },
    timeText1: {
        color: '#4E7E95',
        fontSize: 18,
        position: 'absolute',
        top: 60,
        marginLeft: 25,
    },
    timeText2: {
        color: '#4E7E95',
        fontSize: 18,
        position: 'absolute',
        top: 60,
        marginLeft: 210,
    },
    classicText: {
        flexWrap: 'wrap',
        flex: 1,
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
    placeImage: {
        height: 200,
        width: 360,
        borderRadius: 5,
        marginTop: 15,
        marginLeft: 15,
    },
    rectangle: {
        height: 10,
        width: 30,
        borderRadius: 10,
        backgroundColor: '#F1722A',
    },
    smallcircle: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'lightgrey'
    },
    scrollView: {
        width: Dimensions.get('window').width,
        height: 200,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
});