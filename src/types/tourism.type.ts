export type PlaceValues = {
	id: number;
	name: string;
	open: boolean;
	location: string;
	history: string;
	openingHrWeekday: string;
	openingHrWeekend: string;
	closingHrWeekday: string;
	closingHrWeekend: string;
	departmentName: string;
	images: { id: number; imageUrl: string }[];
	language: string;
	translations: {
		id: number;
		location: string;
		history: string;
		language: string;
	}[];
};
export type RestaurantValues = {
	id: number;
	name: string;
	open: string;
	location: string;
	phone: string;
	openingHrWeekday: string;
	openingHrWeekend: string;
	closingHrWeekday: string;
	closingHrWeekend: string;
	language: string;
	images: { id: number; imageUrl: string }[];

	translations: {
		id: number;
		location: string;
		language: string;
	}[];
	restaurantComments: {
		id: number;
		body: string;
		createAt: string;
	}[];
};

export type PaymentValues = {
	id: number;
	branch: string;
	office: string;
	phone: string;
	latitude: number;
	longitude: number;
};
