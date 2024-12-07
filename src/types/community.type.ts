export type EventValues = {
	id: number;
	title: string;
	header: string;
	location: string;
	description: string;
	language: string;
	category: string;
	date: string;
	startTime: string;
	images: {
		id: number;
		imageUrl: string;
	}[];

	translations: {
		id: number;
		title: string;
		header: string;
		location: string;
		description: string;
		language: string;
		category: string;
	}[];
};

export type WasteSheduleValues = {
	id: number;
	type: string;
	language: string;
	sechdules: {
		id: number;
		day: string;
		startTime: string;
		endTime: string;
		translations: {
			id: number;
			day: string;
			language: string;
		}[];
	}[];
	translations: {
		id: number;
		type: string;
		language: string;
	}[];
};
