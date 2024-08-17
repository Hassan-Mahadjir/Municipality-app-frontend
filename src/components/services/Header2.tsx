import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { scale, verticalScale } from 'react-native-size-matters';

const Header2 = ({ title, onBackPress }: { title: string; onBackPress: () => void }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Image 
          source={{ uri: 'https://www.nicepng.com/png/full/266-2660273_expand-slideshow-white-back-icon-png.png' }} 
          style={styles.backButtonImage} 
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: verticalScale(85),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    paddingHorizontal: scale(10),
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  backButton: {
    position: 'absolute',
    left: scale(15),
    top: verticalScale(25),
    padding: scale(10),
    borderRadius: scale(5),
  },
  backButtonImage: {
    width: scale(30),
    height: scale(30),
    resizeMode: 'contain',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(25),
  },
  title: {
    fontSize: scale(20),
    color: '#fff',
  },
});

export default Header2;
