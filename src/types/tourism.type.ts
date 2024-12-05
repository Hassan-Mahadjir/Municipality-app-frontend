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
    departmentName:string;
    images:{id: number;
        imageUrl: string;
     }[];
	language: string;
    translations: {
		id: number;
		location: string;
		history: string;
        language:string;
	}[];
};