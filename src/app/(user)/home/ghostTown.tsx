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
import { router } from 'expo-router';

const ghostTown = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.headerImage}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/mxhrpx9bcaq-539%3A1986?alt=media&token=480ac0ce-57df-4248-a72e-59ef6490187c',
          }}
        />
        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={() => router.push('')}>
            <Image
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7iqye9dnrse-535%3A1985?alt=media&token=b2edf32f-0532-44af-9dc8-b92414ae47dd',
              }}
              style={styles.arrowImage}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.orangeText}>Back</Text>
        <Text style={styles.headerText}>Ghost Town</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
          }}
          style={styles.starImage}
        />
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
          }}
          style={styles.starImage}
        />
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
          }}
          style={styles.starImage}
        />
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
          }}
          style={styles.starImage}
        />
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/5a14csqsccu-192%3A1099?alt=media&token=eb324012-4bf4-4665-b817-0e140eb32845',
          }}
          style={styles.starImage}
        />
        <Text style={styles.starText}>1,987 Reviews</Text>
      </View>
      <View>
        <Text
          style={[
            styles.orangeText,
            { position: 'absolute', top: -90, left: 15 },
          ]}
        >
          Open Now
        </Text>
        <View
          style={[styles.circle, { position: 'absolute', top: -82, left: 120 }]}
        />
        <Text
          style={[
            {
              position: 'absolute',
              top: -90,
              left: 150,
              fontSize: 20,
              color: '#4E7E95',
            },
          ]}
        >
          8.00 am - 11.59 pm
        </Text>
      </View>
      <View>
        <Text style={styles.classicText}>
          Once a thriving resort and seaside town, the ghost town of Varosha has
          sat abandoned since the 1970s. While you're not allowed to enter the
          fenced-off areas, you can still have a stroll or bike ride around the
          area to explore the deserted buildings and...
        </Text>
        <Text
          style={[
            styles.orangeText,
            { position: 'absolute', top: 90, left: 150 },
          ]}
        >
          Read More
        </Text>
      </View>
      <View>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/w7w9ak2zpdg-594%3A1974?alt=media&token=bebf3baf-4e21-4aa6-9250-7ad471d25b36',
          }}
          style={styles.placeImage}
        />
        <View style={{ flexDirection: 'row' }}>
          <View
            style={[
              styles.circle,
              { position: 'absolute', top: 10, left: 133 },
            ]}
          />
          <View
            style={[
              styles.smallcircle,
              { position: 'absolute', top: 13, left: 157 },
            ]}
          />
          <View
            style={[
              styles.smallcircle,
              { position: 'absolute', top: 13, left: 175 },
            ]}
          />
          <View
            style={[
              styles.smallcircle,
              { position: 'absolute', top: 13, left: 195 },
            ]}
          />
          <View
            style={[
              styles.smallcircle,
              { position: 'absolute', top: 13, left: 215 },
            ]}
          />
        </View>
      </View>
      <Text
        style={{
          marginTop: 40,
          marginLeft: 15,
          fontSize: 20,
          color: '#4E7E95',
        }}
      >
        Comments
      </Text>
      <View style={styles.box}>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/nf8qcuembn-192%3A1140?alt=media&token=b3104fa9-8c36-46af-b1e1-7923dd84795b',
          }}
          style={styles.userPic}
        />
        <Text style={styles.userText}>i_am_user</Text>
        <Text style={styles.userText2}>11 contributions</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
            }}
            style={[styles.smallstarImage, { marginLeft: 75 }]}
          />
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
            }}
            style={styles.smallstarImage}
          />
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
            }}
            style={styles.smallstarImage}
          />
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
            }}
            style={styles.smallstarImage}
          />
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
            }}
            style={styles.smallstarImage}
          />
        </View>
        <Text style={[styles.userTime, { marginTop: 10 }]}>
          Visited: May 2020
        </Text>
        <Text style={styles.userTime}>Commented: 10th May 2020</Text>
        <Text style={styles.comment}>
          Best place I have visited in magusa yet, bike rides are amazing.
          Definitely recommend everyone to visit.
        </Text>
      </View>
      <View style={styles.box}>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/qz4cwqzdta-192%3A1141?alt=media&token=5499ecd4-58bc-4fd2-93b4-21afcda2c946',
          }}
          style={styles.userPic}
        />
        <Text style={styles.userText}>user_23</Text>
        <Text style={styles.userText2}>23 contributions</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
            }}
            style={[styles.smallstarImage, { marginLeft: 75 }]}
          />
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
            }}
            style={styles.smallstarImage}
          />
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
            }}
            style={styles.smallstarImage}
          />
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
            }}
            style={styles.smallstarImage}
          />
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
            }}
            style={styles.smallstarImage}
          />
        </View>
        <Text style={[styles.userTime, { marginTop: 10 }]}>
          Visited: February 2019
        </Text>
        <Text style={styles.userTime}>Commented: 9th Feb 2020</Text>
        <Text style={styles.comment}>
          Cannot believe a town like this was abandoned by its former residents.
          Very spooky. Must visit. Go sight-seeing on...
        </Text>
        <Text style={{ color: 'orange', marginLeft: 195 }}>Read more</Text>
      </View>
      <View style={styles.box}>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dz5iovsgol9-192%3A1142?alt=media&token=d3999b58-1a44-43d8-bf66-d3e3e19d7377',
          }}
          style={styles.userPic}
        />
        <Text style={styles.userText}>online_24/7</Text>
        <Text style={styles.userText2}>8 contributions</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
            }}
            style={[styles.smallstarImage, { marginLeft: 75 }]}
          />
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
            }}
            style={styles.smallstarImage}
          />
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
            }}
            style={styles.smallstarImage}
          />
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
            }}
            style={styles.smallstarImage}
          />
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
            }}
            style={styles.smallstarImage}
          />
        </View>
        <Text style={[styles.userTime, { marginTop: 10 }]}>
          Visited: September 2023
        </Text>
        <Text style={styles.userTime}>Commented: 29th Sept 2020</Text>
        <Text style={styles.comment}>
          Went with friends. Had a good time. They took our ids and kept it for
          the whole time we were inside. Only part I didn’t enjoy.
        </Text>
      </View>
      <Text style={styles.smallText}>See more</Text>
      <View style={styles.container2}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add a comment..."
            placeholderTextColor="#4E7E95"
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.rating}>Give a Rating</Text>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7082gjtq1uv-195%3A1323?alt=media&token=b52d8bb2-91b5-4187-84c0-4e733c1fdd6c',
          }}
          style={styles.whitestars}
        />
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7082gjtq1uv-195%3A1323?alt=media&token=b52d8bb2-91b5-4187-84c0-4e733c1fdd6c',
          }}
          style={styles.whitestars}
        />
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7082gjtq1uv-195%3A1323?alt=media&token=b52d8bb2-91b5-4187-84c0-4e733c1fdd6c',
          }}
          style={styles.whitestars}
        />
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7082gjtq1uv-195%3A1323?alt=media&token=b52d8bb2-91b5-4187-84c0-4e733c1fdd6c',
          }}
          style={styles.whitestars}
        />
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7082gjtq1uv-195%3A1323?alt=media&token=b52d8bb2-91b5-4187-84c0-4e733c1fdd6c',
          }}
          style={styles.whitestars}
        />
      </View>
      <View style={styles.textbox}>
        <Text style={{ fontSize: 20, color: 'orange' }}>Open Map</Text>
      </View>
      <View style={{ marginBottom: 110 }} />
    </ScrollView>
  );
};

export default ghostTown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
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
    top: 80,
    left: 100,
    color: 'white',
    fontSize: 40,
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
  orangeText: {
    fontSize: 20,
    color: 'orange',
    position: 'absolute',
    top: 15,
    left: 45,
  },
  starImage: {
    height: 40,
    width: 40,
    marginVertical: -175,
    marginLeft: 10,
  },
  starText: {
    fontSize: 20,
    position: 'absolute',
    bottom: 100,
    color: '#4E7E95',
  },
  circle: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    backgroundColor: 'orange',
  },
  classicText: {
    flexWrap: 'wrap',
    flex: 1,
    fontSize: 20,
    fontWeight: 'normal',
    color: 'black',
    marginLeft: 15,
    marginTop: -50,
  },
  placeImage: {
    height: 200,
    width: 360,
    borderRadius: 20,
    marginTop: 15,
    marginLeft: 15,
  },
  smallcircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'grey',
  },
  box: {
    height: 125,
    width: 360,
    borderWidth: 2,
    borderColor: '#4E7E95',
    borderRadius: 5,
    marginLeft: 15,
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
  userPic: {
    height: 50,
    width: 50,
    marginLeft: 15,
    marginTop: 15,
  },
  userText: {
    fontSize: 15,
    color: 'black',
    marginLeft: 75,
    marginTop: -50,
  },
  userText2: {
    fontSize: 12,
    color: '#4E7E95',
    marginLeft: 75,
  },
  smallstarImage: {
    height: 15,
    width: 15,
  },
  smallText: {
    fontSize: 15,
    color: 'orange',
    marginTop: -25,
    marginLeft: 310,
  },
  userTime: {
    fontSize: 13,
    color: '#4E7E95',
    marginLeft: 20,
  },
  comment: {
    flexWrap: 'wrap',
    marginTop: -105,
    marginLeft: 195,
    marginRight: 5,
    color: 'black',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#4E7E95',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 30,
    width: 360,
    height: 50,
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
  rating: {
    fontSize: 20,
    color: '#4E7E95',
    marginLeft: 25,
  },
  whitestars: {
    height: 40,
    width: 40,
    marginTop: -10,
    marginLeft: 5,
  },
  textbox: {
    height: 35,
    width: 110,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4E7E95',
    borderRadius: 5,
    marginLeft: 140,
    marginTop: 20,
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
});
