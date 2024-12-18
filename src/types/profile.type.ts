export type ProfileValue = {
	id: number;
	firstName: string;
	lastName?: string;
	phone?: string;
	avatar?: string;
	gender?: string;
	dateofBirth?: string;
	description?: string;
	language: string;
	address?: string;
	user: { id: number; email: string; role: string };
	translation: {
		id: number;
		description: string;
		gender: string;
		language: string;
	};
};

export type postEmailValue = {
	email: string;
};

export type patchProfileValue = {
	firstName?: string;
	lastName?: string;
	phone?: string;
	avatar?: string;
	gender?: string;
	dateofBirth?: string;
	description?: string;
	language: string;
	address?: string;
	email?: string;
};
