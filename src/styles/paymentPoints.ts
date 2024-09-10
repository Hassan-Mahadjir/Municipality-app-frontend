import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    map: {
        fontSize: 25,
        color: '#F1722A',
        fontWeight: 'bold',
        marginLeft: scale(10),
        marginTop: verticalScale(5),
    },
    mapImage: {
        height: verticalScale(190),
        width: '95%',
        marginLeft: scale(10),
        borderRadius: 10
    },
    box: {
        padding: scale(10),
        margin: scale(10),
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
        flexDirection: 'row',
    },
    pinImage: {
        height: verticalScale(100),
        width: scale(100),
        padding: scale(15),
    },
    locationText: {
        fontSize: 16,
        color: '#F1722A',
    },
    orangeText: {
        fontSize: 16,
        color: '#F1722A',
        padding: scale(8)
    },
    blueText: {
        fontSize: 16,
        color: '#4E7E95',
        padding: scale(8)
    }
})