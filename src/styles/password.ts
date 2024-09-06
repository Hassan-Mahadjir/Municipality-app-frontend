import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: scale(20),
        paddingVertical: verticalScale(10),
        backgroundColor: '#f5f5f5', // Background to ensure contrast
    },
    label: {
        fontSize: 16,
        color: '#4E7E95',
        marginBottom: verticalScale(5),
        marginTop: verticalScale(10)
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: scale(15),
        fontSize: 16,
        marginBottom: verticalScale(20),
        color: '#333', // Ensure text color is visible
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3, // Adds the shadow on Android
    },
    button: {
        backgroundColor: '#F1722A',
        paddingVertical: verticalScale(15),
        borderRadius: 10,
        alignItems: 'center',
        marginTop: verticalScale(20),
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})