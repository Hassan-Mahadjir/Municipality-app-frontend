export type scheduleSlotsValues = {
	id: number;
	date: string;
	day: string;
	language: string;
	availabilities: {
		id: number;
		startTime: string;
		endTime: string;
	}[];
	translations: {
		id: number;
		day: string;
		language: string;
	}[];
};

export type responsibleValues = {
	id: number;
	email: string;
	role: string;
	profile: {
		id: number;
		firstName: string;
		lastName: string;
		phone: string;
		avatar: string;
		gender: string;
		description: string;
		language: string;
		translation: {
			id: number;
			description: string;
			gender: string;
			language: string;
		};
	};
};
