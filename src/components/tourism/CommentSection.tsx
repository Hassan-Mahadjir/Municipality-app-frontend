import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '@/styles/commentSection';
import { useTranslation } from 'react-i18next';
import SubmitButtonComponent from '../SubmitButton';
import VechileCard from '../services/VechileCard';
import { scale, verticalScale } from 'react-native-size-matters';
import InputComponent from '../appointment/inputComponent';
import { FormProvider, useForm } from 'react-hook-form';
import { PostcommValues } from '@/types/comments.type';
import { postCommentHistPlace } from '@/services/api/comments';
import { useProfile } from '@/services/api/profile';
import historicalPlaces from '@/app/(user)/home/(tourism)/historicalPlaces';

// Define the type for props
export type CommentProps = {
  comments: {
    id: number;
    body: string;
    createAt: string;
    language: string;
    user: {
      id: number;
      email: string;
      profile: {
        id: number;
        firstName: string;
        lastName: string;
        avatar: string;
      };
    };
  }[];
};


const CommentSection: React.FC<CommentProps> = ({ comments }) => {
  const { t } = useTranslation();
  const addComment = t('addComment');
  const {profileData}=useProfile()
const userid= profileData?.data.data.user.id
  const {mutateAppointment} = postCommentHistPlace(userid?+userid:0)

  // Move the hook calls inside the component
  const methods = useForm<PostcommValues>({

  });

  const onSubmit = (inputData: PostcommValues) => {
    console.log(inputData)
	const commentBody= {
		historicalPlaceId: " ",
    body: inputData,
    commentedOn:"",
    recommenation:5,
	}
  };


  return (
    <View>
      <Text style={styles.headerText}>{t('Comments')}</Text>
	  <View style={{marginHorizontal:scale(15)}}>
      <FormProvider {...methods}>
        <InputComponent
          name="comment"
          text=""
          multiline={true}
          numberOfLines={4}
          height={100}
          inputType="comment"
          returnKeyType="done"
        />

        <SubmitButtonComponent
          title="Submit"
          fullWidth
          onPress={methods.handleSubmit(onSubmit)}
        />
      </FormProvider>
	  </View>

      {comments.map((comment) => (
        <View key={comment.id} style={styles.box}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: comment.user.profile.avatar }} style={styles.userPic} />
            <View style={styles.userInfoContainer}>
              <Text style={styles.usernameText}>{comment.user.profile.firstName}</Text>
              <Text style={styles.visitedText}>
                {t('Visited')}: {comment.createAt}
              </Text>
            </View>
          </View>
          <Text style={styles.comment}>{comment.body}</Text>
        </View>
      ))}
    </View>
  );
};

export default CommentSection;
