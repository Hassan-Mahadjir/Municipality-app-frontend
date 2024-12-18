import { useRouter } from 'expo-router';
import { useEffect } from 'react';

import { getItem } from '@/utils/storage';

const useCheckToken = () => {
	const router = useRouter();

	const checkToken = async () => {
		const token = await getItem('token');
		if (token) {
			router.replace('/(user)');
		} else {
			if (await getItem('refresh-token')) {
			}
			router.replace('/');
		}
	};

	useEffect(() => {
		checkToken();
	}, []); // Dependency array boş bırakıldı çünkü sadece component mount edildiğinde çalışması isteniyor.
};

export default useCheckToken;
