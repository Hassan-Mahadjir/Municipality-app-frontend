import Header from '@/components/report/Header';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Request from '@/components/report/Request';
import Report from '@/components/report/Report';
import { useTranslation } from 'react-i18next';
import Animal from '@/components/report/Animal';

const userReportIndex = () => {
	const { t } = useTranslation();

	const [selectedCategory, setSelectedCategory] = useState<string>(t('report'));
	const renderContent = () => {
		switch (selectedCategory) {
			case t('request'):
				return <Request />;
			case t('animal'):
				return <Animal />;
			default:
				return <Report />;
		}
	};
	return (
		<View style={{ flex: 1 }}>
			<Header
				setSelectedCategory={setSelectedCategory}
				selectedCategory={selectedCategory}
			/>
			{renderContent()}
		</View>
	);
};

export default userReportIndex;
