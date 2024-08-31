export type ProfileValue<T> = {
	profileId: number;
	firstName: string;
	lastName?: string;
	phone?: string;
	avatar?: string;
	gender?: string;
	dateofBirth?: string;
	description?: string;
	address?: string;
	user: T;
};
