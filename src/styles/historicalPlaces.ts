import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
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
})