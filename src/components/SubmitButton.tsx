import React, { PropsWithChildren } from 'react';
import { Button, ButtonProps } from 'react-native-paper';
import { scale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';

const SubmitButtonComponent = ({
	children,
	...props
}: PropsWithChildren & ButtonProps) => {
	return (
		<Button
			style={{ borderRadius: scale(10) }}
			contentStyle={{
				backgroundColor: COLORS.primary,
				height: scale(35),
			}}
			labelStyle={{ color: '#fff', fontSize: 19, fontWeight: 'bold' }}
			{...props}
		>
			{children}
		</Button>
	);
};

export default SubmitButtonComponent;
