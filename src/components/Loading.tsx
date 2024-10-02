import { ActivityIndicator, SafeAreaView } from 'react-native';
import React from 'react';
import { COLORS } from '@/constants/Colors';

const loadingComponent = () => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '50%',
			}}
		>
			<ActivityIndicator size='large' color={COLORS.primary} />
		</SafeAreaView>
	);
};

export default loadingComponent;
