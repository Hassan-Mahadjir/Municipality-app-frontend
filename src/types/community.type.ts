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
