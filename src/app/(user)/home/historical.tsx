import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const historical = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.arrowContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Tourism Services')}
          >
            <Image
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7iqye9dnrse-535%3A1985?alt=media&token=b2edf32f-0532-44af-9dc8-b92414ae47dd',
              }}
              style={styles.arrowImage}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.orangeText}>Back</Text>
        <Text style={styles.headerText}>Historical Places</Text>
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
        <TouchableOpacity onPress={() => navigation.navigate('Ghost Town')}>
          <Text style={styles.imageText}>Ghost Town</Text>
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/i7mhi5ix258-533%3A1980?alt=media&token=e00f3a9d-eae3-4684-a9b7-3a1e97957848',
            }}
            style={styles.pageImage1}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.imageText2}>Ancient Ruins</Text>
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/p0tyivvse89-533%3A1981?alt=media&token=af349848-1f0f-4d3e-a160-0bfdd2a0bc58',
            }}
            style={styles.pageImage2}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.imageText2}>Lala Mustafa Mosque</Text>
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/pev5h9foog8-533%3A1982?alt=media&token=ffcb5a8b-63af-46a7-a6c2-fce98a2d49de',
            }}
            style={styles.pageImage2}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default historical;
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
    left: 100,
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
