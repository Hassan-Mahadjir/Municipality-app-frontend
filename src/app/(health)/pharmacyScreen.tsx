import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import SearchField from '@/components/services/Search';
import Header2 from '@/components/services/Header2';
import HealthItems from '@/components/services/HealthItems'; 
import PharmacyCard from '@/components/services/PharmacyCard';
import NavBar from '@/components/NavBar';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import { scale, verticalScale } from 'react-native-size-matters';

const PharmacyScreen = () => {
  const { t } = useTranslation();
  const Pharmacies = t('Pharmacies');
  const searchbypharmacyname = t('searchbypharmacyname');
  const openthisweekend = t('openthisweekend');
  const emupharmacy = t('emupharmacy');
  const emulocation = t('emulocation');

  return (
    <View style={styles.container}>
      <Header2
        title={Pharmacies}
        onBackPress={() => router.push('./(health)/healthMain')}
      />
      <SearchField
        placeholder={searchbypharmacyname}
        onChangeText={(text) => console.log("Search text:", text)}
      />
      
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.openThisWeekendText}>{openthisweekend}</Text>
        <PharmacyCard />
        <Text style={styles.title}>{Pharmacies}</Text>
        <HealthItems
          name={emupharmacy}
          location={emulocation}
          onSeeLocation={() => router.push('./(health)/pharmacyLocation')}
          imageUri="https://th.bing.com/th/id/OIP.JpbFghckUoJ9IzMRsP12qwHaIP?rs=1&pid=ImgDetMain"
        />
        <HealthItems
          name={emupharmacy}
          location={emulocation}
          onSeeLocation={() => router.push('./(health)/pharmacyLocation')}
          imageUri="https://th.bing.com/th/id/OIP.JpbFghckUoJ9IzMRsP12qwHaIP?rs=1&pid=ImgDetMain"
        />
      </ScrollView>
      <NavBar
        onHomePress={() => router.push('/home')}
        onAppointmentsPress={() => router.push('/appointment')}
        onProfilePress={() => router.push('/profile')}
        onReportPress={() => console.log('Report pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: scale(10),
  },
  openThisWeekendText: {
    fontSize: scale(18),
    marginTop: verticalScale(8),
    marginBottom: verticalScale(4),
    color: COLORS.primary,
  },
  title: {
    fontSize: scale(20),
    color: COLORS.primary,
    marginTop: verticalScale(7),
    marginBottom: verticalScale(3),
  },
});

export default PharmacyScreen;
