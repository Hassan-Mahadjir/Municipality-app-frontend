import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { styles } from '@/styles/commentSection';
import ghostown from '../../assets/data/ghostTown.json'; 

// Define the type for props
type CommentProps = {
  comments: {
    id: number;
    userPic: string;
    username: string;
    contributions: number;
    visited: string;
    comment: string;
  }[];
};

const whiteStarImageUrl = 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7082gjtq1uv-195%3A1323?alt=media&token=b52d8bb2-91b5-4187-84c0-4e733c1fdd6c';
const screenWidth = Dimensions.get('window').width;

const CommentSection: React.FC<CommentProps> = ({ comments }) => {
  const renderWhiteStar = ({ item }: { item: string }) => (
    <Image source={{ uri: item }} style={styles.whitestars} />
  );

  return (
    <View>
      <Text style={styles.headerText}>Comments</Text>
      {comments.map((comment) => (
        <View key={comment.id} style={styles.box}>
          <Image source={{ uri: comment.userPic }} style={styles.userPic} />
          <View style={styles.userInfoContainer}>
            <Text style={styles.usernameText}>{comment.username}</Text>
            <Text style={styles.contributionsText}>{comment.contributions} contributions</Text>
            <View style={styles.starsContainer}>
              <FlatList
              data={ghostown}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ justifyContent: 'center' }}
              renderItem={({ item }) => (
                <View style={{ flexDirection: 'row'}}>
                    {Array.from({ length: 5 }).map((_, index) => (
                    <Image
                      key={index}
                      source={{ uri: item.stars }}
                      style={styles.smallStarImage}
                  />
                  ))}
                </View>
                )}
              />
          </View>
          <Text style={styles.visitedText}>Visited: {comment.visited}</Text>
          </View>
          <Text style={styles.comment}>{comment.comment}</Text>
        </View>
      ))}
      <View style={styles.container2}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add a comment..."
            placeholderTextColor='#4E7E95'
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>Recommend</Text>
        <FlatList
          data={Array(5).fill(whiteStarImageUrl)}
          renderItem={renderWhiteStar}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <TouchableOpacity style={styles.submitBox}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.locationBox}>
          <Text style={styles.locationText}>See Location</Text>
        </TouchableOpacity>
    </View>
  );
};

export default CommentSection;
