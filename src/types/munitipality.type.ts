export type DepartmentValues = {
	id: number;
	email: string;
	name: string;
	description: string;
	language: string;
	phone: string;
	imageUrl: string;
	translations: {
		id: number;
		email: string;
		name: string;
		description: string;
		language: string;
	}[];
	responsible?: {
		id: number;
		profile: {
			id: number;
			firstName: string;
			lastName: string;
		};
	};
};
