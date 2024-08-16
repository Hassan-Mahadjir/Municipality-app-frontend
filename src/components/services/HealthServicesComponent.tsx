import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const HealthServicesComponent = ({ title, backgroundImage, onPress }: { title: string; backgroundImage: { uri: string }; onPress: () => void }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.Imagestyle}>
        <TouchableOpacity onPress={onPress} style={styles.touchable}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: verticalScale(200),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(10),
    borderRadius: scale(10),
    overflow: 'hidden',
    marginLeft: scale(20),
    marginTop: verticalScale(30),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(10) },
    shadowOpacity: 0.5,
    shadowRadius: scale(15),
    elevation: 15,
  },
  Imagestyle: {
    width: '100%',
    height: verticalScale(214),
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  title: {
    fontSize: scale(25),
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HealthServicesComponent;
