import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import Header2 from '@/components/services/Header2';
import NavBar from '@/components/NavBar';
import {styles} from '@/styles/pharmacyLocation';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';
const PharmacyLocation = () => {
  const { t } = useTranslation();
  const emupharmacy = t('emupharmacy');
  const yourlocation =t('yourlocation');
  const location = t('location');
  const showdirections= t('showdirections');
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:"#fff", }}>
      <View style={{ flex: 1 }}>
        <Header2 
          title={emupharmacy} 
          onBackPress={() => router.push('./(health)/pharmacyScreen')} 
        />

        <ScrollView contentContainerStyle={styles.container}>
          <Image
            source={{ uri: 'https://www.google.com/maps/d/thumbnail?mid=1aw3ZIzH8ne6sY8pF8GRYXk1qDBQ' }} 
            style={styles.map}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.pharmacyName}>{emupharmacy}</Text>
            <Text style={styles.locationLabel}>{yourlocation}</Text>
            <Text style={styles.address}>{location}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{showdirections}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      
      <NavBar
        onHomePress={() => router.push('/home')}
        onAppointmentsPress={() => router.push('/appointment')}
        onProfilePress={() => router.push('/profile')}
        onReportPress={()=> console.log('Report pressed') }
      />
    </SafeAreaView>
  );
};


export default PharmacyLocation;
