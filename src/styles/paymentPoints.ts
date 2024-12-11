import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

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
        
        marginHorizontal: scale(10),
        marginVertical: verticalScale(8),
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
        height: verticalScale(70),
        width: scale(70),
        padding: scale(16),
    },
    locationText: {
        fontSize: moderateScale(14),
        color: '#F1722A',
        marginLeft: scale(12)
    },
    orangeText: {
        fontSize: moderateScale(16),
        color: '#F1722A',
        padding: scale(6)
    },
    blueText: {
        fontSize: moderateScale(15),
        color: '#4E7E95',
        padding: scale(6)
    }
})