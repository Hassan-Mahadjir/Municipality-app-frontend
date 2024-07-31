import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

function Verify() {
  const { t } = useTranslation();
  const phone_label = t('login');

  const onSubmit = () => {
    router.replace('./signin');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYInVIiHF4IlVh8fREiBrdi0os47t_S1v3g&s',
          }}
          style={styles.icon}
        />

        <Text style={styles.title}>Verified</Text>
        <Text style={styles.subtitle}>
          Your account has been verified successfully!
        </Text>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={{ color: '#fff', fontSize: 19, fontWeight: 'bold' }}>
            Back To Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 3,
    padding: 5,
    marginTop: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 15,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#989898',
    paddingTop: 13,
    paddingBottom: 55,
  },
  icon: {
    width: 150,
    height: 140,
    marginTop: -120,
  },
  button: {
    padding: 10,
    backgroundColor: '#FF8B20',
    borderRadius: 8,
  },
});

export default Verify;
