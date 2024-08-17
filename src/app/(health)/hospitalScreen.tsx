import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Header2 from '@/components/services/Header2';
import SearchField from '@/components/services/Search';
import HealthItems from '@/components/services/HealthItems';
import NavBar from '@/components/NavBar';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import { scale, verticalScale } from 'react-native-size-matters';

const hospitalScreen = () => {
  const { t } = useTranslation();
  const Hospitals = t('Hospitals');
  const searchbyhospitalname = t('searchbyhospitalname');
  const emuhospital = t('emuhospital');
  const emulocation = t('emulocation');

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Header2
          title={Hospitals}
          onBackPress={() => router.push('./(health)/healthMain')}
        />
        <SearchField
          placeholder={searchbyhospitalname}
          onChangeText={(text) => console.log("Search text:", text)}
        />
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>{Hospitals}</Text>
          <HealthItems
            name={emuhospital}
            location={emulocation}
            onSeeLocation={() => router.push('./(health)/hospitalLocation')}
            imageUri="https://th.bing.com/th/id/R.08480a644a8bf6a20d33aac8fdde047b?rik=r%2fszbI1jJczltQ&pid=ImgRaw&r=0"
          />
          <HealthItems
            name={emuhospital}
            location={emulocation}
            onSeeLocation={() => router.push('./(health)/hospitalLocation')}
            imageUri="https://th.bing.com/th/id/R.08480a644a8bf6a20d33aac8fdde047b?rik=r%2fszbI1jJczltQ&pid=ImgRaw&r=0"
          />
        </ScrollView>
      </View>
      <NavBar
        onHomePress={() => router.push('/home')}
        onAppointmentsPress={() => router.push('/appointment')}
        onProfilePress={() => router.push('/profile')}
        onReportPress={() => console.log('Report pressed')}
      />
    </SafeAreaView>
  );
}

export default hospitalScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingBottom: verticalScale(60), // Ensure padding at the bottom to avoid overlap with NavBar
  },
  contentContainer: {
    padding: scale(10),
  },
  title: {
    fontSize: scale(20),
    color: COLORS.primary,
    marginTop: verticalScale(7),
    marginBottom: verticalScale(3),
    marginLeft: scale(8),
  },
});
