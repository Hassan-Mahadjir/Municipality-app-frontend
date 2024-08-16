import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '@/components/services/Header';
import HealthServicesComponent from '@/components/services/HealthServicesComponent';
import NavBar from '@/components/NavBar';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';

const HealthMain = () => {
  const { t } = useTranslation();
  const Health = t('Health');
  const Hospitals = t('Hospitals');
  const Pharmacies = t('Pharmacies');

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header
          title={Health}
          backgroundImage={{ uri: 'https://th.bing.com/th/id/OIP.scDhVXtpEEcrlMeIhuDKzwHaE8?rs=1&pid=ImgDetMain' }}
          onBackPress={() => router.push('/home')}
        />
        <HealthServicesComponent
          title={Hospitals}
          backgroundImage={{ uri: 'https://th.bing.com/th/id/OIP.eEOP-XkPqW-snCoRZPQFqwHaD6?w=734&h=388&rs=1&pid=ImgDetMain' }}
          onPress={() => router.push('/(health)/hospitalScreen')}
        />
        <HealthServicesComponent
          title={Pharmacies}
          backgroundImage={{ uri: 'https://images.squarespace-cdn.com/content/v1/53cda9a9e4b0f4361f8cc6c9/1407926726645-OPVQZKCJ39ZDFN5N18I9/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Qualified+Pharmacist+Checking+Aged+Care+Medication' }}
          onPress={() => router.push('/(health)/pharmacyScreen')}
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

export default HealthMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: verticalScale(200), // Adjust the height of the header using verticalScale
    justifyContent: 'center',
    alignItems: 'center',
  },
  healthServiceComponent: {
    margin: scale(10), // Adjust margin using scale
    padding: scale(15), // Adjust padding using scale
  },
  navBar: {
    height: verticalScale(60), // Adjust the height of the NavBar using verticalScale
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
});