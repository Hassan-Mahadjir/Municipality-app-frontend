import { useCallback, useState } from 'react';
import { COLORS } from '@/constants/Colors';

const useBorderColor = (
	defaultColor = COLORS.gray,
	focusColor = COLORS.primary
) => {
	const [borderColor, setBorderColor] = useState<string>(defaultColor);
	const [isOnFocus, setIsOnFocus] = useState<boolean>(false);

	const handleOnFocus = useCallback(() => {
		setIsOnFocus(true);
		setBorderColor(focusColor);
	}, [focusColor]);

	const handleOnBlur = useCallback(() => {
		setIsOnFocus(false);
		setBorderColor(defaultColor);
	}, [defaultColor]);

	return {
		borderColor,
		isOnFocus,
		handleOnFocus,
		handleOnBlur,
	};
};

export default useBorderColor;
