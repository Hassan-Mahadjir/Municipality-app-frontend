import { Redirect } from 'expo-router';
import React from 'react';

export default function rootIndex() {
	return <Redirect href={'./(user)/home/(traffic)'} />;
}
