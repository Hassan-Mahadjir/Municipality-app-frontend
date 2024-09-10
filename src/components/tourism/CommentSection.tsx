import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { styles } from '@/styles/commentSection';
import { useTranslation } from 'react-i18next';

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

const renderStars = (starUrl: string) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Image
          key={index}
          source={{ uri: starUrl }}
          style={styles.smallStarImage}
        />
      ))}
    </View>
  );
};

const renderWhiteStars = (starUrl: string) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Image
          key={index}
          source={{ uri: starUrl }}
          style={styles.whitestars}
        />
      ))}
    </View>
  );
};

const yellowStarImageUrl = 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7';
const whiteStarImageUrl = 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7082gjtq1uv-195%3A1323?alt=media&token=b52d8bb2-91b5-4187-84c0-4e733c1fdd6c';

const CommentSection: React.FC<CommentProps> = ({ comments }) => {
  const { t } = useTranslation();
  const addComment = t('addComment');
  return (
    <View>
      <Text style={styles.headerText}>{t('Comments')}</Text>
      {comments.map((comment) => (
        <View key={comment.id} style={styles.box}>
          <View style={{flexDirection: 'row'}}>
            <Image source={{ uri: comment.userPic }} style={styles.userPic} />
            <View style={styles.userInfoContainer}>
              <Text style={styles.usernameText}>{comment.username}</Text>
              <Text style={styles.contributionsText}>{comment.contributions} {t('contributions')}</Text>
              <View style={styles.starsContainer}>
                {renderStars(yellowStarImageUrl)}
              </View>
              <Text style={styles.visitedText}>{t('Visited')}: {comment.visited}</Text>
            </View>
          </View>
          <Text style={styles.comment}>{comment.comment}</Text>
        </View>
      ))}
      <View style={styles.container2}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={addComment}
            placeholderTextColor='#4E7E95'
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{t('Recommend')}</Text>
          {renderWhiteStars(whiteStarImageUrl)}
        <TouchableOpacity style={styles.submitBox}>
          <Text style={styles.submitText}>{t('Submit')}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.locationBox}>
          <Text style={styles.locationText}>{t('See Location')}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default CommentSection;
