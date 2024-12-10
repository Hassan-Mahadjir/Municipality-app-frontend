import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '@/styles/commentSection';
import { useTranslation } from 'react-i18next';
import SubmitButtonComponent from '../SubmitButton';
import VechileCard from '../services/VechileCard';
import { scale, verticalScale } from 'react-native-size-matters';

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

const yellowStarImageUrl =
	'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7';
const whiteStarImageUrl =
	'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7082gjtq1uv-195%3A1323?alt=media&token=b52d8bb2-91b5-4187-84c0-4e733c1fdd6c';

const CommentSection: React.FC<CommentProps> = ({ comments }) => {
	const { t } = useTranslation();
	const addComment = t('addComment');
	return (
		<View>
			<Text style={styles.headerText}>{t('Comments')}</Text>
			<View style={styles.container2}>
				<View style={styles.inputContainer}>
					<TextInput
						placeholder={addComment}
						placeholderTextColor='#4E7E95'
						style={styles.textInput}
					/>
				</View>
			</View>

			<SubmitButtonComponent
				title='Submit'
				fullWidth
				style={{ marginHorizontal: scale(12), height: verticalScale(33) }}
				onPress={() => {}}
			/>

			{comments.map((comment) => (
				<View key={comment.id} style={styles.box}>
					<View style={{ flexDirection: 'row' }}>
						<Image
							source={{ uri: comment.user.profile.avatar }}
							style={styles.userPic}
						/>
						<View style={styles.userInfoContainer}>
							<Text style={styles.usernameText}>
								{comment.user.profile.firstName}
							</Text>

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
