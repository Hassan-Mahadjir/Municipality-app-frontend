export type postReportValues = {
	subject: string;
	longitude: string;
	latitude: string;
	message: string;
	imageUrls: string[];
	departmentName: string;
	language: string;
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
