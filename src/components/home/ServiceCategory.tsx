import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import services from '@/assets/data/services.json';

export default function ServiceCategory() {
  return (
    <View style={style.servicesContainer}>
      {services.map((service, index) => (
        <View key={index}>
          <ImageBackground
            source={{ uri: service.image }}
            resizeMode="cover"
            style={style.container}
            imageStyle={style.imageStyle}
          >
            <LinearGradient
              colors={['rgba(40,53,86,0.9)', 'transparent']}
              style={style.linearGradientSyley}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
            />
            <Text style={style.serviceName}>{service.name}</Text>

            <View style={style.detailsBackground}></View>

            <View style={style.detailsContainer}>
              <Text style={style.detialsText}>Detials</Text>
              <TouchableOpacity>
                <Feather name="arrow-right" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  servicesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  container: {
    width: 185,
    height: 150,
    borderRadius: 10,
    marginTop: 10,
    overflow: 'hidden',
  },
  linearGradientSyley: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10,
  },
  serviceName: {
    position: 'absolute',
    top: '25%',
    marginLeft: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    width: '80%',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  imageStyle: {
    borderRadius: 10,
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    gap: 85,
    top: '73%',
    marginHorizontal: '5%',
  },
  touchDetails: {},
  detailsBackground: {
    backgroundColor: '#4E7E95',
    width: '90%',
    height: 35,
    position: 'absolute',
    top: '70%',
    marginHorizontal: '5%',
    borderRadius: 10,
    opacity: 0.6,
  },
  detialsText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
    marginTop: 3,
  },
});
