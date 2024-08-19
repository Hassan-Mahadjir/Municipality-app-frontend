import { COLORS } from '@/constants/Colors';
import React from 'react';
import {
	StyleProp,
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
	TouchableOpacityProps,
	ViewStyle,
} from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

type CButtonProps = {
	onPress: () => void;
	title: string;
	fullWidth?: boolean;
	style?: StyleProp<ViewStyle>; // Optional style prop
	textStyle?: StyleProp<TextStyle>; // Optional style prop for Text
};

const defaultStyle = StyleSheet.create({
	button: {
		backgroundColor: COLORS.primary,
		height: verticalScale(40),
		borderRadius: scale(10),
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'flex-start',
		paddingHorizontal: scale(16),
	},
	text: {
		color: '#fff',
		fontSize: moderateScale(19),
		fontWeight: 'bold',
	},
	fullWidth: {
		alignSelf: 'auto',
	},
});

const SubmitButtonComponent = ({
	onPress,
	title,
	style,
	textStyle,
	fullWidth,
	...props
}: CButtonProps & TouchableOpacityProps) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[defaultStyle.button, style, fullWidth && defaultStyle.fullWidth]} // Merging styles with array
			{...props}
		>
			<Text
				style={[defaultStyle.text, textStyle]} // Merging styles with array
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default SubmitButtonComponent;
