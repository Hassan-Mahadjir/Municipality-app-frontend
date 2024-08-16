import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

type NavBarProps = {
  backgroundImage?: { uri: string };
  onHomePress: () => void;
  onAppointmentsPress: () => void;
  onReportPress: () => void;
  onProfilePress: () => void;
};

const NavBar = ({ onHomePress, onAppointmentsPress, onReportPress, onProfilePress }: NavBarProps) => {
  return (
    <View style={styles.navBarContainer}>
      <TouchableOpacity style={styles.navItem} onPress={onHomePress}>
        <Ionicons name="home-outline" size={moderateScale(24)} color="black" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={onAppointmentsPress}>
        <Ionicons name="calendar-outline" size={moderateScale(24)} color="black" />
        <Text style={styles.navText}>Appointment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={onReportPress}>
        <Ionicons name="alert-circle-outline" size={moderateScale(24)} color="black" />
        <Text style={[styles.navText, { color: 'black' }]}>Report</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={onProfilePress}>
        <Ionicons name="person-outline" size={moderateScale(24)} color="black" />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBarContainer: {
    width: '100%',
    height: verticalScale(60), // Scaled height
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // White background
    elevation: scale(20), // Scaled shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: verticalScale(4) }, // Scaled shadow offset for iOS
    shadowOpacity: 0.35, // Shadow opacity for iOS
    shadowRadius: scale(5.84), // Scaled shadow radius for iOS
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: scale(12), // Scaled font size
    color: 'black',
    marginTop: verticalScale(4), // Scaled top margin
  },
});

export default NavBar;