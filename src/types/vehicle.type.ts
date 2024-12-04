export type VehicleValues = {
	id: number;
	plateNumber: string;
	year: number    
	brand: string;
    collectedDate: string;
    reason:string;
    location:string;
    fee:string;
    status:string;
    imageUrl: string;
	language: string;
	translations: {
		id: number;
        reason:string;
		location: string;
		language: string;
	}[];
};