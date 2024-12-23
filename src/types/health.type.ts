export type HospitalValues = {
	id: number;
	name: string;
	location: string;
	imageUrl: string;
	language: string;
	logo: string;
	translations: {
		id: number;
		location: string;
		language: string;
	}[];
	latitude: number;
	longitude: number;
};
export type PharmacyValues = {
	id: number;
	name: string;
	location: string;
	imageUrl: string;
	language: string;
	logo: string;
	openthisWeek: boolean;
	translations: {
		id: number;
		location: string;
		language: string;
	}[];
	latitude: number;
	longitude: number;
};
