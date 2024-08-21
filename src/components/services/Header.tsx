import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { scale, verticalScale } from 'react-native-size-matters';

type HeaderProps = {
  title: string;
  backgroundImage: { uri: string };
  onBackPress: () => void;
};

const Header = ({ title, backgroundImage, onBackPress }: HeaderProps) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.headerContainer}>
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'transparent']} 
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.gradient}
      >
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Image 
            source={{ uri: 'https://www.nicepng.com/png/full/266-2660273_expand-slideshow-white-back-icon-png.png' }} 
            style={styles.backButtonImage} 
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: verticalScale(150),
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  backButton: {
    position: 'absolute',
    left: scale(15),
    top: scale(25),
    borderRadius: scale(5),
  },
  backButtonImage: {
    width: scale(27),
    height: scale(27),
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: scale(28),
    fontWeight: '700',
    color: '#FFF',
    textAlign: 'center',
  },
});

export default Header;
