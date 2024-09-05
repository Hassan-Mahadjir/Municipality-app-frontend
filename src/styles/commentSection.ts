import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { Dimensions } from 'react-native'
import { COLORS } from '@/constants/Colors'

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    headerText: {
        marginTop: verticalScale(-15),
        marginLeft: scale(15),
        fontSize: 20,
        color: '#F1722A',
        fontWeight: '600',
    },
    box: {
        padding: scale(15),
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3
    },
    userInfoContainer: {               
      marginLeft: '20%',
      marginTop: '-20%'
    },
      userPic: {
        width: scale(50),
        height: verticalScale(50),
        borderRadius: 25,
        resizeMode: 'contain',
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
        marginRight: 5
      },
      visitedText: {
        marginTop: verticalScale(-15),
        fontSize: 12,
        color: '#888'
      },
      comment: {
        fontSize: 16,
        marginVertical: verticalScale(10)
      },
      container2: {
        padding: 15
      },
      inputContainer: {
        borderWidth: 1,
        borderColor: '#F1722A',
        borderRadius: 5
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
        marginRight: scale(5)
      },
      submitBox: {
        height: verticalScale(30),
        width: scale(100),
        backgroundColor: '#F1722A',
        borderRadius: 15,
        alignItems: 'center',
      },
      submitText: {
        fontSize: 22,
        color: 'white',
      },
      locationBox: {
        height: verticalScale(30),
        width: scale(200),
        backgroundColor: '#F1722A',
        borderRadius: 15,
        alignItems: 'center',
        marginLeft: '20%',
        marginTop: verticalScale(10),
      },
      locationText: {
        fontSize: 22,
        color: 'white',
      }
});