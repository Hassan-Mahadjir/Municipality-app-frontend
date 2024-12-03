export type ServiceValues = {
	id: number;
	name: string;
	phone: string;
	email: string;
	imageUrl: string;
	language: string;
	description: string;
	translations: {
		id: number;
		name: string;
		description: string;
		language: string;
	}[];
};
