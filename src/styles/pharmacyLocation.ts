import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: verticalScale(60), // Ensure padding at the bottom to avoid overlap with NavBar
    backgroundColor: '#fff',
  },
  map: {
    width: '100%',
    height: verticalScale(300), // Adjust the height as needed
  },
  detailsContainer: {
    padding: scale(20),
    backgroundColor: '#fff',
  },
  pharmacyName: {
    fontSize: scale(18),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
  },
  locationLabel: {
    fontSize: scale(16),
    color: COLORS.gray,
    marginBottom: verticalScale(5),
  },
  address: {
    fontSize: scale(14),
    marginBottom: verticalScale(20),
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: scale(10),
    borderRadius: scale(5),
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: scale(16),
  },
});
