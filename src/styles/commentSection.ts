import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    headerText: {
        marginLeft: scale(15),
        fontSize: 20,
        color: '#F1722A',
        fontWeight: '600',
    },
    box: {
        padding: scale(15),
        margin: scale(15),
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
        marginBottom: verticalScale(-5)
    },
    userInfoContainer: {               
      marginLeft: scale(15)
    },
      userPic: {
        width: scale(50),
        height: verticalScale(50),
        borderRadius: verticalScale(25),
        resizeMode: 'cover',
        marginTop: verticalScale(-7)
      },
      usernameText: {
        fontSize: 14,
        fontWeight: 'bold'
      },
      contributionsText: {
        fontSize: 12,
        color: '#777'
      },
      starsContainer: {
        flexDirection: 'row',
      },
      smallStarImage: {
        width: scale(15),
        height: verticalScale(15),
        marginRight: scale(2),
        resizeMode: 'contain',
      },
      visitedText: {
        fontSize: 12,
        color: '#888',
        marginTop:verticalScale(5),
      },
      comment: {
        fontSize: 16,
        // marginVertical: verticalScale(10),
      },
      container2: {
        padding: 15
      },
      inputContainer: {
        borderWidth: 1,
        borderColor: '#F1722A',
        borderRadius: 5,
        height: verticalScale(40),
      },
      textInput: {
        padding: 10
      },
      ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: scale(15),
        marginRight: scale(15)
      },
      rating: {
        fontSize: 16,
        marginRight: scale(5),
        color: '#4E7E95'
      },
      whitestars: {
        width: scale(20),
        height: verticalScale(20),
        marginRight: scale(2),
        resizeMode: 'contain',
      },
      submitBox: {
        height: verticalScale(30),
        width: scale(100),
        backgroundColor: '#F1722A',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: verticalScale(120),
      },
      submitText: {
        fontSize: 20,
        color: 'white',
      },
      locationBox: {
        height: verticalScale(30),
        width: scale(200),
        backgroundColor: '#F1722A',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '20%',
        marginTop: verticalScale(10),
      },
      locationText: {
        fontSize: 22,
        color: 'white',
      }
});