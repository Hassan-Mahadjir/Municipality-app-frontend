//CommentSection.tsx 
import React from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from '@/styles/commentSection';
import { useTranslation } from 'react-i18next';
import SubmitButtonComponent from '../SubmitButton';
import VechileCard from '../services/VechileCard';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import InputComponent from '../appointment/inputComponent';
import { FormProvider, useForm } from 'react-hook-form';
import { PostcommValues } from '@/types/comments.type';
import { postCommentHistPlace, postCommentRest } from '@/services/api/comments';
import { useProfile } from '@/services/api/profile';
import historicalPlaces from '@/app/(user)/home/(tourism)/historicalPlaces';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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


const CommentPart: React.FC<CommentProps> = ({ comments, serviceId ,refetch , refetchcomment}) => {
  const { t } = useTranslation();
  const addComment = t('addComment');
  const {profileData}=useProfile()
const userid= profileData?.data.data.user.id
  const {mutateAppointment, reset} = postCommentRest(userid?+userid:0)

  // Move the hook calls inside the component
  const methods = useForm<PostcommValues>({

  });

   const onSubmit = (inputData: PostcommValues) => {
    
	const commentBody= {
		restaurantId: serviceId,
    body: inputData.body,
    commentedOn:"restaruant",
    recommenation:5,
	}
  
   mutateAppointment(commentBody)
   refetch()
   refetchcomment()
   methods.reset()
   
  };


  return (
    <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
            >
    <View>
      <Text style={styles.headerText}>{t('Comments')}</Text>
	  <View style={{marginHorizontal:scale(15)}}>
      <KeyboardAwareScrollView>
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
          title={t('Submit')}
          fullWidth
          onPress={methods.handleSubmit(onSubmit)}
        />
      </FormProvider></KeyboardAwareScrollView>
	  </View>

      {comments.map((comment) => (
        <View key={comment.id} style={styles.box}>
          <View style={{ flexDirection: 'row',marginBottom: verticalScale(4) }}>
            <Image source={{ uri: comment.user.profile.avatar }} style={styles.userPic} />
            <View style={styles.userInfoContainer}>
              <Text style={styles.usernameText}>{comment.user.profile.firstName}</Text>
              <Text style={styles.visitedText}>
                {t('Visited')}: {comment.createAt.split('T')[0]}
              </Text>
            </View>
          </View>
          <Text style={styles.comment}>{comment.body}</Text>
        </View>
      ))}
    </View></KeyboardAvoidingView>
  );
};

export default CommentPart;
