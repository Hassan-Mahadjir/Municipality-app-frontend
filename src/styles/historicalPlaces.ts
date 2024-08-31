import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 100,
        backgroundColor: '#4E7E95'
    },
    headerText: {
        position: 'absolute',
        top: 50,
        left: 100,
        color: 'white',
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
    },
    arrowImage: {
      height: verticalScale(20),
      width: scale(25),
    },
    arrowContainer: {
        position: 'absolute',
        top: 50,
        left: 10,
        width: 40, 
        height: 40, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
      alignItems: 'center',
      marginVertical: 10,
      flex: 1,
    },
    pageImage: {
      height: verticalScale(100),
      width: scale(161),
      borderRadius: 5,
    },
    imageText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#F1722A',
      textAlign: 'center',
      marginTop: 5,
    },
    container2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    inputContainer: {
      flexDirection: 'row',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#F1722A',
      width: scale(330),
      height: verticalScale(30),
    },
    searchIcon: {
      position: 'absolute',
      marginTop: 5,
      marginLeft: 20,
      width: 24,
      height: 24,
      marginRight: 10,
    },
    textInput: {
      position: 'absolute',
      marginLeft: 50,
      fontSize: 15,
      color: 'grey',
      flex: 1,
    },
})