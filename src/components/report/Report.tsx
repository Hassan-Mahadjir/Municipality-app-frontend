import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { appointment } from '@/types/appointmnet-report';
import { FormProvider, useForm } from 'react-hook-form';
import InputComponent from '../appointment/inputComponent';
import { scale, verticalScale } from 'react-native-size-matters';
import SubmitButtonComponent from '../SubmitButton';

const Report = () => {
	const methods = useForm<appointment>({
		defaultValues: {
			purpose: '',
		},
	});

	return (
		<View style={{ margin: scale(10) }}>
			<FormProvider {...methods}>
				<InputComponent
					name='subject'
					text='Subject'
					multiline={true}
					numberOfLines={4}
					height={40}
					inputType='subject'
					returnKeyType='done'
				/>
				<InputComponent
					name='location'
					text='Location'
					multiline={true}
					numberOfLines={4}
					height={40}
					inputType='location'
					returnKeyType='done'
				/>
				<InputComponent
					name='message'
					text='Message'
					multiline={true}
					numberOfLines={4}
					height={100}
					inputType='message'
					returnKeyType='done'
				/>

				<SubmitButtonComponent
					style={{ marginTop: verticalScale(10) }}
					title='Submit Report'
					fullWidth
					onPress={() => {}}
				/>
			</FormProvider>
		</View>
	);
};

export default Report;

const styles = StyleSheet.create({});
