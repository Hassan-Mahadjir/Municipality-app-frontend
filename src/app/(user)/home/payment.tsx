import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const payment = () => {
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
        <Text style={styles.headerText}>Payment Points</Text>
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
      <Text style={styles.map}>MAP</Text>
      <TouchableOpacity>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ukggue1xyx-608%3A1976?alt=media&token=7af13b24-5e6f-4515-833c-7ab92e6a7059',
          }}
          style={styles.mapImage}
        />
      </TouchableOpacity>
      <Text style={styles.map}>Payment Points</Text>
      <View style={styles.box}>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/8z51sldrhbe-256%3A2042?alt=media&token=e62a0361-18bd-4746-b23f-3ae79c5bb4ef',
          }}
          style={styles.points}
        />
        <Text style={styles.pointText}>See location on map</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.blackText, { marginTop: -105 }]}>Branch:</Text>
          <Text style={[styles.blueText, { marginTop: -105 }]}>
            {' '}
            Sönmez KKTCELL
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.blackText, { marginTop: -75 }]}>Office:</Text>
          <Text style={[styles.blueText, { marginTop: -75 }]}> BYT Magusa</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.blackText, { marginTop: -45 }]}>No:</Text>
          <Text style={[styles.blueText, { marginTop: -45 }]}> 70002001</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.blackText, { marginTop: -15 }]}>Location:</Text>
          <Text style={[styles.blueText, { marginTop: -15 }]}>
            35.1417, 33.9150
          </Text>
        </View>
      </View>
      <View style={styles.box}>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/8z51sldrhbe-256%3A2042?alt=media&token=e62a0361-18bd-4746-b23f-3ae79c5bb4ef',
          }}
          style={styles.points}
        />
        <Text style={styles.pointText}>See location on map</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.blackText, { marginTop: -105 }]}>Branch:</Text>
          <Text style={[styles.blueText, { marginTop: -105 }]}>
            {' '}
            Magusa Ambar 2
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.blackText, { marginTop: -75 }]}>Office:</Text>
          <Text style={[styles.blueText, { marginTop: -75 }]}> KIBTEK</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.blackText, { marginTop: -45 }]}>No:</Text>
          <Text style={[styles.blueText, { marginTop: -45 }]}> 70003007</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.blackText, { marginTop: -15 }]}>Location:</Text>
          <Text style={[styles.blueText, { marginTop: -15 }]}>
            35.1238, 33.9252
          </Text>
        </View>
      </View>
      <View style={styles.box}>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/8z51sldrhbe-256%3A2042?alt=media&token=e62a0361-18bd-4746-b23f-3ae79c5bb4ef',
          }}
          style={styles.points}
        />
        <Text style={styles.pointText}>See location on map</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.blackText, { marginTop: -105 }]}>Branch:</Text>
          <Text style={[styles.blueText, { marginTop: -105 }]}>
            {' '}
            Sarpkan Daü
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.blackText, { marginTop: -75 }]}>Office:</Text>
          <Text style={[styles.blueText, { marginTop: -75 }]}> KKTCELL</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.blackText, { marginTop: -45 }]}>No:</Text>
          <Text style={[styles.blueText, { marginTop: -45 }]}> 70002014</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.blackText, { marginTop: -15 }]}>Location:</Text>
          <Text style={[styles.blueText, { marginTop: -15 }]}>
            35.1467, 33.9088
          </Text>
        </View>
      </View>
      <Text
        style={{
          color: 'orange',
          fontSize: 20,
          marginLeft: 290,
          marginTop: -20,
        }}
      >
        See more
      </Text>
      <View style={{ marginBottom: 100 }} />
    </ScrollView>
  );
};

export default payment;

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
    left: 105,
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
    width: 40,
    height: 40,
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
  map: {
    fontSize: 25,
    color: 'black',
    marginLeft: 15,
    marginTop: 5,
  },
  mapImage: {
    height: 225,
    width: 365,
    marginLeft: 15,
    borderRadius: 10,
  },
  box: {
    height: 125,
    width: 360,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 30,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
  points: {
    height: 100,
    width: 100,
    marginLeft: 25,
  },
  pointText: {
    fontSize: 14,
    color: 'orange',
    marginTop: -10,
    marginLeft: 10,
  },
  blackText: {
    marginLeft: 155,
    fontSize: 16,
    color: 'black',
  },
  blueText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#4E7E95',
  },
});
