import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { scale, verticalScale } from 'react-native-size-matters';

const HealthItems = ({ name, location, onSeeLocation, imageUri }: { name: string; location: string; onSeeLocation: () => void; imageUri: string }) => {
  return (
    <View style={styles.healthCard}>
      <View style={styles.iconContainer}>
        <Image source={{ uri: imageUri }} style={styles.healthIcon} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.healthName}>{name}</Text>
        <Text style={styles.healthLocation}>{location}</Text>
        <TouchableOpacity onPress={onSeeLocation}>
          <Text style={styles.seeLocation}>See Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  healthCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: scale(10),
    marginVertical: verticalScale(8),
    borderRadius: scale(10),
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.1,
    shadowRadius: scale(5),
    elevation: 3,
  },
  iconContainer: {
    marginRight: scale(10),
    paddingRight: scale(7),
  },
  healthIcon: {
    width: scale(70),
    height: verticalScale(80),
    borderRadius: scale(1), 
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
  },
  healthName: {
    fontWeight: 'bold',
    fontSize: scale(16),
  },
  healthLocation: {
    color: COLORS.gray,
    marginVertical: verticalScale(5),
  },
  seeLocation: {
    color: COLORS.primary,
    textDecorationLine: 'underline',
  },
});

export default HealthItems;
