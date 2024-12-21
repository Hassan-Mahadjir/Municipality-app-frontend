export type postReportValues = {
	subject: string;
	longitude: string;
	latitude: string;
	message: string;
	imageUrls: string[];
	departmentName: string;
	language: string;
	id?: number;
};

export type categoryValues = {
	id: number;
	name: string;
	language: string;
	translations: {
		id: number;
		name: string;
		language: string;
	}[];
};

export type postAnimalReportValues = {
	title: string;
	description: string;
	location: string;
	contactInfo: string;
	latitude: string;
	longitude: string;
	language: string;
	imageUrls: string[];
	id?: number;
};
