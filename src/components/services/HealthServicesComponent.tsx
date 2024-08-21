import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const HealthServicesComponent = ({ title, backgroundImage, onPress }: { title: string; backgroundImage: { uri: string }; onPress: () => void }) => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.Imagestyle}>
          <TouchableOpacity onPress={onPress} style={styles.touchable}>
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '84%',
    height: verticalScale(153),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(8),
    borderRadius: scale(8),
    overflow: 'hidden',
   // marginLeft: scale(10),
    marginTop: verticalScale(32),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(8) },
    shadowOpacity: 0.4,
    shadowRadius: scale(12),
    elevation: 12,
  },
  Imagestyle: {
    width: '100%',
    height: verticalScale(160),
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  title: {
    fontSize: scale(20),
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HealthServicesComponent;
