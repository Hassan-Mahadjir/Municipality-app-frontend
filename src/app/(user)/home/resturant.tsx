import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';

const resturant = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7iqye9dnrse-535%3A1985?alt=media&token=b2edf32f-0532-44af-9dc8-b92414ae47dd',
              }}
              style={styles.arrowImage}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.orangeText}>Back</Text>
        <Text style={styles.headerText}>Restaurants</Text>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/t6bloy1u4x-530%3A1974?alt=media&token=501a9565-8cba-43ca-b9f9-3539d346a374',
          }}
          style={styles.lineImage}
        />
      </View>
      <View style={styles.container2}>
        <View style={styles.inputContainer}>
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/uc21h2tjj6p-530%3A1979?alt=media&token=3f641514-28f9-43c1-90dc-bc20bf9257ed',
            }} // Replace with your image URL or local asset
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search by place name"
            placeholderTextColor="orange"
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={{ height: 575, marginTop: 200 }}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.imageText}>Beckett</Text>
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/8izqo9xo0qp-601%3A1974?alt=media&token=37b826bc-1941-4281-9334-c81e9c1bdaa9',
            }}
            style={styles.pageImage1}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.imageText2}>Californian</Text>
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/mu8gqzruo2a-601%3A1975?alt=media&token=3852fb54-75a3-4062-a93d-bce10ca82a3d',
            }}
            style={styles.pageImage2}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.imageText2}>Cafe No. 8</Text>
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jqdne8wm0m-601%3A1976?alt=media&token=731b0358-f59a-436a-a4a9-89ccf2de612d',
            }}
            style={styles.pageImage2}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default resturant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 65,
  },
  headerText: {
    position: 'absolute',
    top: 10,
    left: 130,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  arrowImage: {
    height: 30,
    width: 30,
  },
  arrowContainer: {
    position: 'absolute',
    top: 10,
    left: 5,
    width: 40, // Adjust the size here
    height: 40, // Adjust the size here
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineImage: {
    position: 'absolute',
    height: 15,
    width: 35,
    top: 25,
    right: 15,
  },
  orangeText: {
    fontSize: 20,
    color: 'orange',
    position: 'absolute',
    top: 15,
    left: 45,
  },
  pageImage1: {
    height: 175,
    width: 350,
    borderRadius: 15,
    marginLeft: 20,
    marginTop: -160,
  },
  pageImage2: {
    height: 175,
    width: 350,
    borderRadius: 15,
    marginLeft: 20,
    marginTop: 50,
  },
  imageText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    position: 'absolute',
    top: -200,
    left: 20,
  },
  imageText2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    position: 'absolute',
    marginTop: 10,
    marginLeft: 20,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#D3D3D3',
    borderRadius: 15,
    width: 375,
    height: 50,
  },
  searchIcon: {
    position: 'absolute',
    marginTop: 10,
    marginLeft: 20,
    width: 24,
    height: 24,
    marginRight: 10,
  },
  textInput: {
    position: 'absolute',
    marginLeft: 50,
    fontSize: 15,
    color: 'orange',
    flex: 1,
  },
});
