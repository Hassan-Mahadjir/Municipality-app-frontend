export type EventValues = {
	id: number;
	title: string;
	header: string;
	location: string;
	longitude:number;
	latitude:number;
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

export type EmergencyContactValues = {
	id: number;
	name: string;
	phone: number;
	language: string;
	translations: {
		id: number;
		name: string;
		language: string;
	}[];
};

export type DisasterPointValues = {
	id: number;
	name:string;
	longitude:number;
	latitude:number;
	location: string;
	language: string;
	capacity: number;
	translations: {
		id: number;
		location: string;
		language: string;
	}[];
};

export type ShelterValues = {
	id: number;
	name: string;
	location: string;
	longitude:number;
	latitude:number;
	logo: string;
	language: string;
	translations: {
		id: number;
		location: string;
		language: string;
	}[];
};

export type ReportedanimalValues = {
	id: number;
	title: string;
	status: string;
	description: string;
	contactInfo: string;
	location: string;
	createAt: string;
	language: string;
	images: {
		id: number;
		imageUrl: string;
	}[];
	translations: {
		id: number;
		title: string;
		status: string;
		description: string;
		contactInfo: string;
		location: string;
		language: string;
	}[];
	user: {
		id: number;
		email: string;
		role: number;
	};
};

export type updateReportedAnimalValues = {
	status: string;
	userId: number;
	contactInfo?: string;
};
