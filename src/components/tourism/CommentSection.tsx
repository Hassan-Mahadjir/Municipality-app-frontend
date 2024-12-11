//CommentSection.tsx 
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '@/styles/commentSection';
import { useTranslation } from 'react-i18next';
import SubmitButtonComponent from '../SubmitButton';
import VechileCard from '../services/VechileCard';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
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
  serviceId: number;
  refetch: () => void;
  refetchcomment: () => void;
};


const CommentSection: React.FC<CommentProps> = ({ comments, serviceId ,refetch , refetchcomment}) => {
  const { t } = useTranslation();
  const addComment = t('addComment');
  const {profileData}=useProfile()
const userid= profileData?.data.data.user.id
  const {mutateAppointment, reset} = postCommentHistPlace(userid?+userid:0)

  // Move the hook calls inside the component
  const methods = useForm<PostcommValues>({

  });

   const onSubmit = (inputData: PostcommValues) => {
    
	const commentBody= {
		historicalPlaceId: serviceId,
    body: inputData.body,
    commentedOn:"historicalPlace",
    recommenation:5,
	}
  console.log(commentBody)
   mutateAppointment(commentBody)
   methods.reset()
   refetch()
   refetchcomment()
   
  };


  return (
    <View>
      <Text style={styles.headerText}>{t('Comments')}</Text>
	  <View style={{marginHorizontal:scale(15)}}>
      <FormProvider {...methods}>
        <InputComponent
          name="body"
          text=""
          multiline={true}
          numberOfLines={4}
          height={verticalScale(60)}
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
          <View style={{ flexDirection: 'row',marginBottom: verticalScale(4) }}>
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
