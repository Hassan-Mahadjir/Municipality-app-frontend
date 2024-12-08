export type ProfileValue = {
	profileId: number;
	firstName: string;
	lastName?: string;
	phone?: string;
	avatar?: string;
	gender?: string;
	dateofBirth?: string;
	description?: string;
	address?: string;
	user: { id: number; email: string; role: string };
};
