import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const tourism = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.headerImage}
          source={{
            uri: 'https://clooper.com/blog/wp-content/uploads/2024/03/types-of-tourism-1024x576.jpg',
          }}
        />
        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/aq2vtnbnng6-492%3A1981?alt=media&token=c8eef990-b028-446e-9917-66ec7eb2097a',
              }}
              style={styles.arrowImage}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>TOURISM SERVICES</Text>
      </View>
      <View style={{ height: 500 }}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gw1np47cik5-494%3A1982?alt=media&token=a1f0a9fb-a9d1-413e-8637-d05bcb2921b3',
            }}
            style={styles.pageImage1}
          />
          <Text style={styles.imageText}>Historical Places</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/b5thzlyqrw8-494%3A1985?alt=media&token=f8dfac1b-c3e1-4fee-b81a-fb18cb302c72',
            }}
            style={styles.pageImage2}
          />
          <Text style={styles.imageText2}>Restaurants</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/pt1364fsoue-494%3A1988?alt=media&token=d9b13662-5aa5-4ae7-99a5-db6bbdb3e2a1',
            }}
            style={styles.pageImage2}
          />
          <Text style={styles.imageText2}>Payment Points</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default tourism;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 350,
  },
  headerImage: {
    paddingTop: 30,
    width: '100%',
    height: 150,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingHorizontal: 20,
  },
  headerText: {
    position: 'absolute',
    top: 90,
    left: 50,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  arrowImage: {
    height: 35,
    width: 35,
  },
  arrowContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 40, // Adjust the size here
    height: 40, // Adjust the size here
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageImage1: {
    height: 175,
    width: 350,
    borderRadius: 15,
    marginLeft: 20,
    marginTop: -175,
  },
  pageImage2: {
    height: 175,
    width: 350,
    borderRadius: 15,
    marginLeft: 20,
    marginTop: 30,
  },
  imageText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 50,
    color: '#ffffff',
    marginTop: -50,
  },
  imageText2: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 50,
    color: '#ffffff',
    marginTop: -50,
  },
});
